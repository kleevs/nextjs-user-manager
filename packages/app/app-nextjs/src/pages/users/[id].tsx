import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { DetailDataDeps, UserAccount, DetailModule } from "user-manager";
import { createStore, get } from "lib";

function createListPageData(id: number) {
    const user: UserAccount = null;
    const store = createStore<DetailDataDeps>({ 
        meta: {
            uri: {
                detail: (id) => `/users/${id}`
            }
        },
        user, 
        href: `/users/${id}`
    });

    if( typeof window !== 'undefined') {
        get<UserAccount>('/api/users').then((user) => {
            store.update({...store.getValue(), user});
        })
    }

    return store;
}

export default function DetailPage() {
    const router = useRouter();
    const id = +router.query.id || 0;
    const pageData = useMemo(() => createListPageData(id), [id]);
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])

    return <DetailModule pageData={pageData} />
}
