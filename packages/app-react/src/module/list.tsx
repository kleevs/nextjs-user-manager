import type { getUsers } from "user-manager-business/src/main";
import type Table from '../component/table'
import type Card from '../component/cards'
import React from "react";
import { useAsync } from "../hook/use-async";

type ListDeps = {
    Table: (typeof Table) extends (...args: any[]) => infer T ? T : typeof Table;
    getUsers: typeof getUsers;
}
export const ListModuleFactory = ({Table, getUsers}: ListDeps) => 
function ListModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers(), [], []);

    return <Table navigate={navigate} users={users} />
}

type CardDeps = {
    Card: (typeof Card) extends (...args: any[]) => infer T ? T : typeof Card;
    getUsers: typeof getUsers;
}
export const CardsModuleFactory = ({Card, getUsers}: CardDeps) => 
function CardsModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers(), [], []);

    return <Card navigate={navigate} users={users} />
}