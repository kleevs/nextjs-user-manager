import React, { useMemo } from "react";
import { useRouter } from 'next/router'
import { MobileModule } from 'user-manager-react'
import { PageListData } from "list-page";
import { PageDetailData } from "detail-page";
import { UserAccount } from "common-page";
import { createStore, Store } from "lib";
import { useEffect } from "react";

function createListPageData(): [Store<PageListData & PageDetailData>, () => () => void] {
    const storage = typeof localStorage !== 'undefined' && localStorage || null;
    const data = storage?.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(obj => ({...obj, birthdate: new Date(obj.birthdate)})) || [];
    const store = createStore<PageListData & PageDetailData>({ users, user: null, href: '/' });
    const onSaveList = () => store.onUpdate(({ users, user }) => { 
        users = users.filter(u => u?.id !== user?.id).concat(user).filter(_ => !!_)
        storage?.setItem("users", JSON.stringify(users)); 
    });
    return [store, onSaveList];
}

export default function ListPage() {
    const [pageData, onSave] = useMemo(() => createListPageData(), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(onSave, [onSave]);

    return <MobileModule pageData={pageData} />
}
