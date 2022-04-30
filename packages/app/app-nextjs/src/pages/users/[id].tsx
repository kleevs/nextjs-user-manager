import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { MobileModule } from 'user-manager-react'
import { PageListData, UserAccount } from "user-manager-business";
import { createStore, Store } from "lib";

function createListPageData(id: number): [Store<PageListData>, () => () => void] {
    const storage = typeof localStorage !== 'undefined' && localStorage || null;
    const data = storage?.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(obj => ({...obj, birthdate: new Date(obj.birthdate)})) || [];
    const store = createStore<PageListData>({ users, href: `/users/${id}` });
    const onSave = () => store.onUpdate(({ users }) =>     storage?.setItem("users", JSON.stringify(users)));
    return [store, onSave];
}

export default function DetailPage() {
    const router = useRouter();
    const id = +router.query.id || 0;
    const [pageData, onSave] = useMemo(() => createListPageData(id), [id]);
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(onSave, [onSave]);

    return <MobileModule pageData={pageData} id={id} />
}
