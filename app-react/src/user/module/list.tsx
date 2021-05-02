import type { Table, Card } from '../main'
import type { getUsers } from "user-manager-business/src/main";
import React from "react";
import { useAsync } from "../hook/use-async";

type ListDeps = {
    Table: typeof Table;
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
    Card: typeof Card;
    getUsers: typeof getUsers;
}
export const CardsModuleFactory = ({Card, getUsers}: CardDeps) => 
function CardsModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers(), [], []);

    return <Card navigate={navigate} users={users} />
}