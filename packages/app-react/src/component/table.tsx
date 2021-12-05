import { Link, Panel, Table, dateToString, preventDefault, stopPropagation } from "lib";
import { removeUser } from 'user-manager-business';
import React from "react";

export default function List({navigate, users }: {
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