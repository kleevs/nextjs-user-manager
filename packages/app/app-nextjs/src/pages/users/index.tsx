import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { DetailModule } from 'user-manager-react'
import { PageDetailData } from "detail-page";
import { UserAccount } from "common-page";
import { createStore } from "lib";

function createListPageData() {
    const user: UserAccount = null;
    const store = createStore<PageDetailData>({ user, href: '/users' });

    return store;
}

export default function DetailPage() {
    const pageData = useMemo(() => createListPageData(), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])

    return <DetailModule pageData={pageData} />
}
