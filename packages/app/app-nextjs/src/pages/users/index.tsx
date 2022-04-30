import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { DetailModule } from 'user-manager-react'
import { PageDetailData } from "detail-page";
import { UserAccount } from "common-page";import { createStore, Store } from "lib";

function createListPageData(): [Store<PageDetailData>, () => () => void] {
    const storage = typeof localStorage !== 'undefined' && localStorage || null;
    const data = storage?.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(obj => ({...obj, birthdate: new Date(obj.birthdate)})) || [];
    const store = createStore<PageDetailData>({ user: null, href: '/users' });
    const onSaveList = () => store.onUpdate(({ user }) => { 
        const result = users.filter(u => u?.id !== user?.id).concat(user).filter(_ => !!_)
        storage?.setItem("users", JSON.stringify(result)); 
    });
    return [store, onSaveList];
}

export default function DetailPage() {
    const [pageData, onSave] = useMemo(() => createListPageData(), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(onSave, [onSave]);

    return <DetailModule pageData={pageData} />
}
