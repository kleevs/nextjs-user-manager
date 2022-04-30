import { PageListData, removeUser } from "list-page";
import { moveOnDetail, DetailLocation } from "common-page";
import React from "react";
import { useSelector } from "../hooks/use-selector";
import { dateToString, preventDefault, stopPropagation, Store } from "lib";
import styled from 'styled-components';

const TableStyled = (styled.table)``;
const Header = (styled.thead)``;
const Body = (styled.tbody)``;
const Row = (styled.tr)``;
const Cellule = (styled.td)``;
const Link = styled.a``

export function ListModule({pageData}: {
    pageData: Store<PageListData>;
}) {
    const users = useSelector(pageData, ({ users }) => users); 

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
                        <Cellule><Link onClick={(e) => stopPropagation(e, () => removeUser(pageData, _.id))} /></Cellule>        
                    </Row>)}
                </Body>
            </TableStyled>
            <Link href={DetailLocation(null)} onClick={(e) => preventDefault(e, () => moveOnDetail(pageData, null))}>Nouvel utilisateur</Link>
        </div>
    </div>
}