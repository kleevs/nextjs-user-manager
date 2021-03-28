import { User } from "user-manager-business/src/type/user";
import React, { ComponentType } from "react";

export default function Cards({Card, Panel, Link, removeUser, navigate, users, toDateString, preventDefault}: {
    Card: ComponentType<{onRemove: () => void; onClick: () => void; children: unknown}>;
    Panel: ComponentType<{ title: string; children: unknown; }>;
    Link: ComponentType<{ href?: string; onClick?: (e: any) => void;}>;
    toDateString: (v: Date) => string;
    preventDefault: (e, callback: () => void) => void;
    removeUser: (id: number) => Promise<void>;
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
            <div>{toDateString(_.birthdate)}</div>
            <div>{_.login}</div>
            <div>{_.isActif ? 'actif' : 'inactif'}</div>
        </Card>)}
    </Panel>
}