import React from "react";
import { CardsModule } from './list'
import { Layout } from "../component";
import { DetailModule } from "./detail";

export enum Page {
    List = 1,
    Detail
} 

export function MobileModule({page, id, navigate}: {
    page: Page;
    id: number;
    navigate: (href: string) => void;
}) {
    const sidebarOpen = page === Page.Detail;
    const onClose = () => navigate('/');

    return <Layout onClose={onClose} open={sidebarOpen} Sidebar={<DetailModule id={id} navigate={navigate} />}>
        <CardsModule navigate={navigate} />
    </Layout>;
}