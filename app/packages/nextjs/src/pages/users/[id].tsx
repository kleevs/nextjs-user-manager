import React from "react";
import { useRouter } from 'next/router'
import { DetailModule } from "user-manager-ui";
import { useAppContext } from "src/hooks/use-app-context";

export default function DetailPage() {
    const router = useRouter();
    const id = +router.query.id || 0;
    const context = useAppContext();
    return <DetailModule context={context} id={id} />
}
