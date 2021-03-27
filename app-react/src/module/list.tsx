import React from "react";
import List from '../container/list'
import { getUsers } from "user-manager-business/src/service/user";
import { useAsync } from "../hook/use-async";

export function ListModule() {
    const users = useAsync(() => getUsers(), [], []);

    return <List users={users} />
}