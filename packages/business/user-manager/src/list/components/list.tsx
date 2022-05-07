import { RemoveDataDeps, removeUser } from '../actions';
import { moveOnDetail } from '../../common';
import React from "react";
import { useSelector } from "../../common";
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

export type ListDataDeps = RemoveDataDeps & {
    meta: {
        uri: {
            detail: (id: number) => string;
        }
    }
}

export function ListModule({pageData}: {
    pageData: Store<ListDataDeps>;
}) {
    const detailUri  = useSelector(pageData, ({ meta }) => meta.uri.detail);
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
                        <Cellule><Link href={detailUri(_.id)} onClick={(e) => stopPropagationAndPreventDefault(e, () => moveOnDetail(pageData, _.id))}>Modifier</Link></Cellule>        
                        <Cellule><Link onClick={(e) => stopPropagationAndPreventDefault(e, () => removeUser(pageData, _.id))}>X</Link></Cellule>        
                    </Row>)}
                </Body>
            </TableStyled>
            <Link href={detailUri(null)} onClick={(e) => preventDefault(e, () => moveOnDetail(pageData, null))}>Nouvel utilisateur</Link>
        </div>
    </div>
}