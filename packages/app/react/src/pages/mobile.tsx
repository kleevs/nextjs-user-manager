import Card from '../common/cards'
import { DetailModule } from './detail'
import React, { useMemo } from "react";
import styled from "styled-components";
import { getUsers, createListPageData } from 'user-manager-business';

const Container = styled.div`
    position: relative;
    height: 100%;
`;

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

export enum Page {
    List = 1,
    Detail
} 

export function MobileModule({page, id, navigate}: {
    page: Page;
    id: number;
    navigate: (href: string) => void;
}) {
    const pageData = useMemo(createListPageData, []);
    const sidebarOpen = page === Page.Detail;
    const users = useMemo(() => getUsers(pageData), []);
    const onClose = () => navigate('/');

    return <Container>
        {sidebarOpen && <Overlay onClick={() => onClose()}/>}
        <Block open={sidebarOpen}>
            <DetailModule id={id} navigate={navigate} />
        </Block>
        <Card users={users} navigate={navigate} />
    </Container>
}