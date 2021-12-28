import { getUsers } from "user-manager-business";
import Table from '../component/table'
import Card from '../component/cards'
import React, { useMemo } from "react";

export function ListModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useMemo(() => getUsers(), []);
    return <Table navigate={navigate} users={users} />
}

export function CardsModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useMemo(() => getUsers(), []);
    return <Card navigate={navigate} users={users} />
}