import React from "react";
import { DetailModule } from "user-manager-ui";
import { useDetailPage } from "src/hooks/use-detail-page-context";
import { UserAccount } from "user-manager";

type PageProps = {
    user: UserAccount
}

export default function DetailPage({ user }: PageProps) {
    const context = useDetailPage(user);
    return <DetailModule context={context} />
}

export async function getServerSideProps(req): Promise<{ props: PageProps }> {
    const { id } = req.query;

    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await res.json() as UserAccount
  
    // Pass data to the page via props
    return { props: { user } }
}