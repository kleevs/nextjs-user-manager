import LayoutMobile from "../component/ux/layout-mobile";
import { CardsModule } from './list'
import DetailModule from './detail'
import React from "react";

export enum Page {
    List = 1,
    Detail
} 

export default function MobileModule({page, id, navigate}: {
    page: Page;
    id: number;
    navigate: (href: string) => void;
}) {
    const sidebarOpen = page === Page.Detail;
    const onClose = () => navigate('/');

    return <LayoutMobile onClose={onClose} open={sidebarOpen} Sidebar={<DetailModule id={id} navigate={navigate} />}>
        <CardsModule navigate={navigate} />
    </LayoutMobile>;
}