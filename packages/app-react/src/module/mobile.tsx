import type { LayoutMobile } from "lib/src/main";
import type { CardsModuleFactory } from './list'
import type DetailModuleFactory from './detail'
import React from "react";

type Deps = {
    LayoutMobile: typeof LayoutMobile;
    CardsModule: (typeof CardsModuleFactory) extends (...args: any[]) => infer T ? T : typeof CardsModuleFactory; 
    DetailModule: (typeof DetailModuleFactory) extends (...args: any[]) => infer T ? T : typeof DetailModuleFactory; 
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