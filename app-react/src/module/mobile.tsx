import React, { useState } from "react";
import { ListModule } from './list'
import { getUsers } from "user-manager-business/src/service/user";
import { useAsync } from "../hook/use-async";
import { Layout } from "../component";
import { Sidebar } from "../container/sidebar/sidebar";
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
        <ListModule navigate={navigate} />
    </Layout>;
}