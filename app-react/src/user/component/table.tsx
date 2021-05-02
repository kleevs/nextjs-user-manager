import type { Link } from "../../style";
import type { Panel, Table } from '../../ux/main';
import type { User } from "user-manager-business/src/type/user";
import type { dateToString } from '../../tools/format'
import type { preventDefault, stopPropagation } from '../../tools/dom'
import type { removeUser } from 'user-manager-business/src/main';
import React from "react";

type Deps = {
    Link: typeof Link;
    Table: typeof Table;
    Panel: typeof Panel;
    dateToString: typeof dateToString;
    preventDefault: typeof preventDefault;
    stopPropagation: typeof stopPropagation;
    removeUser: typeof removeUser;
}

export default ({Table, Panel, Link, stopPropagation, preventDefault, dateToString, removeUser}: Deps) => 
function List({navigate, users }: {
    navigate: (location: string) => void;
    users: User[];
}) {
    return <Panel title='Liste des utilisateurs'>
        <Table titles={['Nom', 'Prénom', 'Date de naissance', 'Login', 'Actif', '']}
            rows={users.map(_ => [
                _.lastName,
                _.firstName,
                dateToString(_.birthdate, ''),
                _.login,
                _.isActif ? 'actif' : 'inactif',
                <Link onClick={(e) => stopPropagation(e, () => removeUser(_.id).then(() => navigate('/')))} />
            ])}
        />
        <Link href="/users" onClick={(e) => preventDefault(e, () => navigate('/users'))}>Nouvel utilisateur</Link>
    </Panel>
}