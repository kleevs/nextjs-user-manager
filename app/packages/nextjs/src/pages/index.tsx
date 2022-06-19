import React from "react";
import { ListModule } from 'user-manager-ui'
import { UserAccount } from "user-manager";
import { useAppContext } from "src/hooks/use-app-context";

type PageProps = {
    users: UserAccount[]
}

export default function ListPage({ users }: PageProps) {
    const context = useAppContext();
    return <ListModule context={context} />
}

export async function getServerSideProps(): Promise<{ props: PageProps }> {
    // Fetch data from external API
    const res = await fetch('/api/users')
    const users = await res.json() as UserAccount[]
  
    // Pass data to the page via props
    return { props: { users } }
}