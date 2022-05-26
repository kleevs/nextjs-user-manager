import React, { useMemo } from "react";
import { ListDataDeps, UserAccount, ListModule } from 'user-manager'
import { createStore } from "lib";
import { useHrefEffect } from "src/hooks/use-href-effect";

type PageProps = {
    users: UserAccount[]
}

function createListPageData(users: UserAccount[]) {
    const result: ListDataDeps = { 
        meta: {
            uri: {
                home: '/',
                detail: '/users/:id'
            }
        },
        users, 
        href: '/',
    };

    return result;
}

export default function ListPage({ users }: PageProps) {
    const pageData = useMemo(() => createStore<ListDataDeps>(createListPageData(users)), [users]);
    useHrefEffect(pageData);
    return <ListModule pageData={pageData} />
}

export async function getServerSideProps(): Promise<{ props: PageProps }> {
    // Fetch data from external API
    const res = await fetch('/api/users')
    const users = await res.json() as UserAccount[]
  
    // Pass data to the page via props
    return { props: { users } }
}