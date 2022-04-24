import { createListPageData, initialize } from "user-manager-business";
import Table from '../common/table'
import React, { useEffect, useMemo } from "react";
import { useSelector } from "src/hooks/use-selector";

export function ListModule({navigate}: {
    navigate: (href: string) => void;
}) {
    const pageData = useMemo(createListPageData, []);
    const users = useSelector(pageData.store, ({ users }) => users); 
    useEffect(() => initialize(pageData.store), [pageData.store])

    return <Table navigate={navigate} users={users} />
}