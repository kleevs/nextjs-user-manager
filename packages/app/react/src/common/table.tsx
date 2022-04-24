import { dateToString, preventDefault, stopPropagation } from "lib";
import { removeUser, User } from 'user-manager-business';
import styled from 'styled-components';
import React, { useCallback } from "react";

const TableStyled = (styled.table)``;
const Header = (styled.thead)``;
const Body = (styled.tbody)``;
const Row = (styled.tr)``;
const Cellule = (styled.td)``;
const Link = styled.a``

export default function List({navigate, users }: {
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
            <TableStyled>
                <Header> 
                    <Row> 
                        {['Nom', 'Prénom', 'Date de naissance', 'Login', 'Actif', ''].map((_, i) => <Cellule key={i}>{_}</Cellule>)}
                    </Row>
                </Header> 
                <Body>
                    {users.map((_,i) => <Row key={i}>
                        <Cellule>{_.lastName}</Cellule>
                        <Cellule>{_.firstName}</Cellule>
                        <Cellule>{dateToString(_.birthdate, '')}</Cellule>
                        <Cellule>{_.login}</Cellule>
                        <Cellule>{_.isActif ? 'actif' : 'inactif'}</Cellule>
                        <Cellule><Link onClick={(e) => stopPropagation(e, () => remove(_.id))} /></Cellule>        
                    </Row>)}
                </Body>
            </TableStyled>
            <Link href="/users" onClick={(e) => preventDefault(e, () => navigate('/users'))}>Nouvel utilisateur</Link>
        </div>
    </div>
}