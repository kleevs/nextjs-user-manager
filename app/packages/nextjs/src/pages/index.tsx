import React from "react";
import { ListModule } from 'user-manager-ui'
import { UserAccount } from "user-manager";
import { useListPage } from "src/hooks/use-list-page-context";

type PageProps = {
    users: UserAccount[]
}

export default function ListPage({ users }: PageProps) {
    const context = useListPage(users);
    return <ListModule context={context} />
}

export async function getServerSideProps(): Promise<{ props: PageProps }> {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json() as UserAccount[]
  
    // Pass data to the page via props
    return { props: { users } }
}