import { User } from "user-manager-business/src/type/user";
import React, { ComponentType } from "react";

export default function List ({Table, Panel, Link, removeUser, navigate, users, toDateString, stopPropagation}: {
    Table: ComponentType<{
        titles: string[];
        rows: (string | JSX.Element)[][];
    }>;
    Panel: ComponentType<{ title: string; children: unknown; }>;
    Link: ComponentType<{ href?: string; onClick?: (e: any) => void;}>;
    toDateString: (v: Date) => string;
    stopPropagation: (e, callback: () => void) => void;
    removeUser: (id: number) => Promise<void>;
    navigate: (location: string) => void;
    users: User[];
}) {
    return <Panel title='Liste des utilisateurs'>
        <Table titles={['Nom', 'Prénom', 'Date de naissance', 'Login', 'Actif', '']}
            rows={users.map(_ => [
                _.lastName,
                _.firstName,
                toDateString(_.birthdate),
                _.login,
                _.isActif ? 'actif' : 'inactif',
                <Link onClick={(e) => stopPropagation(e, () => removeUser(_.id).then(() => navigate('/')))} />
            ])}
        />
        <Link href="/users">Nouvel utilisateur</Link>
    </Panel>
}