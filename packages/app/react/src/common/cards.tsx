import { dateToString, preventDefault, stopPropagation } from "lib";
import { removeUser, User } from 'user-manager-business';
import styled from 'styled-components';
import React, { useCallback } from "react";

const Link = styled.a``

export default function Cards({navigate, users}: {
    navigate: (location: string) => void;
    users: User[];
}) {
    const remove = useCallback((id: number) => {
        removeUser(id); 
        navigate('/');
    }, []);

    return <div> 
        <h1>Liste des utilisateurs</h1> 
        <hr/>
        <div>
            <Link href="/users" onClick={(e) => preventDefault(e, () => navigate('/users'))}>Nouvel utilisateur</Link>
            {users.map((_,i) => <div key={i} onClick={() => navigate(`/users/${_.id}`)}>
            <button onClick={(e) => stopPropagation(e, () => remove(_.id))}>Supprimer</button>
            <div>{_.lastName} {_.lastName}</div>
                <div>{dateToString(_.birthdate, '')}</div>
                <div>{_.login}</div>
                <div>{_.isActif ? 'actif' : 'inactif'}</div>
            </div>)}
        </div>
    </div>
}