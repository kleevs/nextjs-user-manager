import { getUsers, UserAccount, createListPageData } from "user-manager-business";
import Table from '../common/table'
import React, { useMemo } from "react";

export function ListModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const pageData = useMemo(createListPageData, []);
    const users = useMemo(() => getUsers(pageData), []);
    return <Table navigate={navigate} users={users} />
}