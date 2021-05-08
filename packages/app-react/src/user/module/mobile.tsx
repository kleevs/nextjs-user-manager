import type { CardsModule, DetailModule } from '../main'
import type { LayoutMobile } from "../../ux/main";
import React from "react";

type Deps = {
    LayoutMobile: typeof LayoutMobile;
    CardsModule: typeof CardsModule; 
    DetailModule: typeof DetailModule;
}

export enum Page {
    List = 1,
    Detail
} 

export default ({ LayoutMobile, CardsModule, DetailModule}: Deps) => 
function MobileModule({page, id, navigate}: {
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