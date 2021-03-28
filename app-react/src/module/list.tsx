import React from "react";
import List from '../container/list'
import { getUsers } from "user-manager-business/src/service/user";
import { useAsync } from "../hook/use-async";

export function ListModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const users = useAsync(() => getUsers(), [], []);

    return <List navigate={navigate} users={users} />
}