import { dateToString, preventDefault, stopPropagation } from "lib";
import { removeUser, User } from 'user-manager-business';
import Panel from "./panel";
import styled from 'styled-components';
import React from "react";

const Link = styled.a``

export default function Cards({navigate, users}: {
    navigate: (location: string) => void;
    users: User[];
}) {
    return <Panel title='Liste des utilisateurs'>
        <Link href="/users" onClick={(e) => preventDefault(e, () => navigate('/users'))}>Nouvel utilisateur</Link>
        {users.map((_,i) => <div key={i} onClick={() => navigate(`/users/${_.id}`)}>
        <button onClick={(e) => stopPropagation(e, () => removeUser(_.id).then(() => navigate('/')))}>Supprimer</button>
        <div>{_.lastName} {_.lastName}</div>
            <div>{dateToString(_.birthdate, '')}</div>
            <div>{_.login}</div>
            <div>{_.isActif ? 'actif' : 'inactif'}</div>
        </div>)}
    </Panel>
}