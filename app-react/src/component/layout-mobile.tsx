import React from "react";
import styled from "styled-components";

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

export function LayoutMobile({Sidebar, children, open, onClose}: {
    Sidebar: JSX.Element;
    children: unknown;
    open: boolean;
    onClose: () => void;
}) {
    return <Container>
        {open && <Overlay onClick={() => onClose()}/>}
        <Block open={open}>
            {Sidebar}
        </Block>
        {children}
    </Container>
}