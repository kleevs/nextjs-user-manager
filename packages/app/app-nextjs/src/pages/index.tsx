import React, { useMemo } from "react";
import { useRouter } from 'next/router'
import { PageListData, UserAccount, ListModule } from 'user-manager'
import { createStore, get } from "lib";
import { useEffect } from "react";

function createListPageData() {
    const users: UserAccount[] = [];
    const store = createStore<PageListData>({ users, href: '/' });

    if( typeof window !== 'undefined') {
        get<UserAccount[]>('/api/users').then((users) => {
            store.update({...store.getValue(), users});
        })
    }

    return store;
}

export default function ListPage() {
    const pageData = useMemo(() => createListPageData(), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])

    return <ListModule pageData={pageData} />
}
