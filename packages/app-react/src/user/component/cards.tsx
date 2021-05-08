import type { Link } from "../../style";
import type { Card, Panel } from '../../ux/main';
import type { User } from "user-manager-business/src/type/user";
import type { dateToString } from '../../tools/format'
import type { preventDefault } from '../../tools/dom'
import type { removeUser } from 'user-manager-business/src/main';
import React from "react";

type Deps = {
    Link: typeof Link;
    Card: typeof Card;
    Panel: typeof Panel;
    dateToString: typeof dateToString;
    preventDefault: typeof preventDefault;
    removeUser: typeof removeUser;
}

export default ({ Link, Card, Panel, dateToString, preventDefault, removeUser}: Deps) => 
function Cards({navigate, users}: {
    navigate: (location: string) => void;
    users: User[];
}) {
    return <Panel title='Liste des utilisateurs'>
        <Link href="/users" onClick={(e) => preventDefault(e, () => navigate('/users'))}>Nouvel utilisateur</Link>
        {users.map((_,i) => <Card key={i} 
            onRemove={() => removeUser(_.id).then(() => navigate('/'))}
            onClick={() => navigate(`/users/${_.id}`)}
        >
            <div>{_.lastName} {_.lastName}</div>
            <div>{dateToString(_.birthdate, '')}</div>
            <div>{_.login}</div>
            <div>{_.isActif ? 'actif' : 'inactif'}</div>
        </Card>)}
    </Panel>
}