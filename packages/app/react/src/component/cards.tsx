import { dateToString, preventDefault } from "lib";
import { removeUser, User } from 'user-manager-business';
import  Card from "./ux/card";
import Panel from "./ux/panel";
import { Link } from "./ux/clickable";
import React from "react";

export default function Cards({navigate, users}: {
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