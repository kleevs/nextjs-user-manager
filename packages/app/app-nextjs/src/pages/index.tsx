import React, { useMemo } from "react";
import { useRouter } from 'next/router'
import { ListDataDeps, UserAccount, ListModule } from 'user-manager'
import { createStore, get } from "lib";
import { useEffect } from "react";

function createListPageData() {
    const result: ListDataDeps = { 
        meta: {
            uri: {
                home: '/',
                detail: '/users/:id'
            }
        },
        users: [], 
        href: '/',
    };

    return result;
}

export default function ListPage() {
    const pageData = useMemo(() => createStore<ListDataDeps>(createListPageData()), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(() => {
        if( typeof window !== 'undefined') {
            get<UserAccount[]>('/api/users').then((users) => {
                pageData.update({...pageData.getValue(), users});
            })
        }
    }, [pageData])

    return <ListModule pageData={pageData} />
}
