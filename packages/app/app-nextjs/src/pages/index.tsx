import React, { useMemo } from "react";
import { useRouter } from 'next/router'
import { ListModule } from 'user-manager-react'
import { PageListData } from "list-page";
import { UserAccount } from "common-page";
import { createStore, Store } from "lib";
import { useEffect } from "react";

function createListPageData(): [Store<PageListData>, () => () => void] {
    const storage = typeof localStorage !== 'undefined' && localStorage || null;
    const data = storage?.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(obj => ({...obj, birthdate: new Date(obj.birthdate)})) || [];
    const store = createStore<PageListData>({ users, href: '/' });
    const onSaveList = () => store.onUpdate(({ users }) => { 
        storage?.setItem("users", JSON.stringify(users)); 
    });
    return [store, onSaveList];
}

export default function ListPage() {
    const [pageData, onSave] = useMemo(() => createListPageData(), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(onSave, [onSave]);

    return <ListModule pageData={pageData} />
}
