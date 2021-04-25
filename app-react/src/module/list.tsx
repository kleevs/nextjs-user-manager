import React from "react";
import { List, Cards } from '../container/list'
import { getUsers } from "user-manager-business/src/main";
import { useAsync } from "../hook/use-async";

export function ListModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers(), [], []);

    return <List navigate={navigate} users={users} />
}

export function CardsModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers(), [], []);

    return <Cards navigate={navigate} users={users} />
}