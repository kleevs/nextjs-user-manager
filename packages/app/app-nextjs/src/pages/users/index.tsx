import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { DetailDataDeps, UserAccount, DetailModule } from "user-manager";
import { createStore } from "lib";

function createListPageData() {
    const user: UserAccount = null;
    const result: DetailDataDeps = { 
        meta: {
            uri: {
                detail: '/users/:id'
            }
        },
        user, 
        href: '/users',
    };

    return result;
}

export default function DetailPage() {
    const pageData = useMemo(() => createStore(createListPageData()), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])

    return <DetailModule pageData={pageData} />
}
