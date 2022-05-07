import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { PageListData, PageDetailData, UserAccount, MobileModule } from 'user-manager'
import { createStore, Store } from "lib";

function createListPageData(id: number): [Store<PageListData & PageDetailData>, () => () => void] {
    const storage = typeof localStorage !== 'undefined' && localStorage || null;
    const data = storage?.getItem("users");
    const users: UserAccount[] = data && (JSON.parse(data || '') || []).map(obj => ({...obj, birthdate: new Date(obj.birthdate)})) || [];
    const user = users.find(u => u.id === id);
    const store = createStore<PageListData & PageDetailData>({ users, user: user, href: '/users' });
    const onSaveList = () => store.onUpdate(({ users, user }) => { 
        users = users.filter(u => u?.id !== user?.id).concat(user).filter(_ => !!_)
        storage?.setItem("users", JSON.stringify(users)); 
    });
    return [store, onSaveList];
}

export default function DetailPage() {
    const router = useRouter();
    const id = +router.query.id || 0;
    const [pageData, onSave] = useMemo(() => createListPageData(id), [id]);
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
    useEffect(onSave, [onSave]);

    return <MobileModule pageData={pageData} />
}
