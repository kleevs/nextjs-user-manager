import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { MobileModule } from 'user-manager-react'
import { PageListData, UserAccount } from "user-manager-business";
import { createStore, Store } from "lib";

function createListPageData(): [Store<PageListData>, () => () => void] {
    const storage = typeof localStorage !== 'undefined' && localStorage || null;
    const data = storage?.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(obj => ({...obj, birthdate: new Date(obj.birthdate)})) || [];
    const store = createStore<PageListData>({ users, href: '/users' });
    const onSave = () => store.onUpdate(({ users }) =>     storage?.setItem("users", JSON.stringify(users)));
    return [store, onSave];
}


export default function DetailPage() {
    const [pageData, onSave] = useMemo(() => createListPageData(), []);
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(onSave, [onSave]);

    return <MobileModule pageData={pageData} id={0} />
}
