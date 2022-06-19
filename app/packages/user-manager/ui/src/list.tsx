import { detailUri, moveOnDetail, removeUser, loadUsers, ListPageContext, AppContext } from 'user-manager';
import React, { useMemo } from "react";
import { useAsync } from "lib-ui";
import { dateToString, preventDefault, stopPropagationAndPreventDefault, Store } from "lib";
import styled from 'styled-components';

const TableStyled = (styled.table)``;
const Header = (styled.thead)``;
const Body = (styled.tbody)``;
const Row = (styled.tr)``;
const Cellule = (styled.td)``;
const Link = styled.a`
    cursor: pointer;
`

export function ListModule({context}: {
    context: AppContext;
}) {
    const listContext = useMemo<ListPageContext>(() => ({...context}), []);
    const users = useAsync(() => loadUsers(), []); 

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
                        <Cellule><Link href={detailUri(listContext, _.id)} onClick={(e) => stopPropagationAndPreventDefault(e, () => moveOnDetail(listContext, _.id))}>Modifier</Link></Cellule>        
                        <Cellule><Link onClick={(e) => stopPropagationAndPreventDefault(e, () => removeUser(listContext, _.id))}>X</Link></Cellule>        
                    </Row>)}
                </Body>
            </TableStyled>
            <Link href={detailUri(context, null)} onClick={(e) => preventDefault(e, () => moveOnDetail(listContext, null))}>Nouvel utilisateur</Link>
        </div>
    </div>
}