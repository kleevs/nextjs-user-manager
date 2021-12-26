import { getUsers, User } from "user-manager-business";
import Table from '../component/table'
import Card from '../component/cards'
import React from "react";
import { useAsync } from "../hook/use-async";

export function ListModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers<User>(), [], []);
    return <Table navigate={navigate} users={users} />
}

export function CardsModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers<User>(), [], []);
    return <Card navigate={navigate} users={users} />
}