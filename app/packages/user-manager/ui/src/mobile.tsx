import { DetailModule } from './detail'
import React, { useCallback } from "react";
import styled from "styled-components";
import { moveOnDetail, removeUser, loadUsers, AppContext } from 'user-manager';
import { useAsync } from 'lib-ui';
import { dateToString, preventDefault, stopPropagation } from "lib";

const Container = styled.div`
    position: relative;
    height: 100%;
`;

const Link = styled.a``

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
`;

const Block = styled.div`
    position: absolute;
    height: 100%;
    width: 85%;
    top: 0px;
    left: -100%;
    background-color: white;
    transition: left 0.5s;

    ${({open}: {open: boolean}) => open && `
        left: 0px;
    `}
`;

export function MobileModule({ context, id, sidebarOpen }: {
    id: number;
    sidebarOpen: boolean;
    context: AppContext;
}) {
    const users = useAsync(() => loadUsers(), []); 
    const remove = useCallback((id: number) => {
        removeUser(context, id); 
    }, [context]);

    return <Container>
        {sidebarOpen && <Overlay onClick={() => context?.moveTo(context?.uri?.home)}/>}
        <Block open={sidebarOpen}>
            <DetailModule context={context} id={id} />
        </Block>
        <div> 
            <h1>Liste des utilisateurs</h1> 
            <hr/>
            <div>
                <Link href="/users" onClick={(e) => preventDefault(e, () => moveOnDetail(context, null))}>Nouvel utilisateur</Link>
                {users.map((_,i) => <div key={i} onClick={() => moveOnDetail(context, _.id)}>
                    <button onClick={(e) => stopPropagation(e, () => remove(_.id))}>Supprimer</button>
                    <div>{_.lastName} {_.lastName}</div>
                    <div>{dateToString(_.birthdate, '')}</div>
                    <div>{_.login}</div>
                    <div>{_.isActif ? 'actif' : 'inactif'}</div>
                </div>)}
            </div>
        </div>
    </Container>
}