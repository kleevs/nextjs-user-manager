import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { DetailDataDeps, UserAccount, DetailModule } from "user-manager";
import { createStore, get } from "lib";

function createListPageData(id: number) {
    const result: DetailDataDeps = { 
        meta: {
            uri: {
                detail: '/users/:id'
            }
        },
        user: null, 
        href: `/users/${id}`
    };

    return result;
}

export default function DetailPage() {
    const router = useRouter();
    const id = +router.query.id || 0;
    const pageData = useMemo(() => createStore(createListPageData(id)), [id]);
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(() => {
        
        if( typeof window !== 'undefined') {
            get<UserAccount>('/api/users').then((user) => {
                pageData.update({...pageData.getValue(), user});
            })
        }
    }, [pageData])

    return <DetailModule pageData={pageData} />
}
