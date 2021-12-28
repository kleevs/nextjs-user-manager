import React from "react";
import { useRouter } from 'next/router'
import { MobileModule, Page } from 'user-manager-react'

export default function DetailPage() {
    const router = useRouter();
    const id = +router.query.id || 0;
    const navigate = (href: string) => { 
        router.push(href); 
    }
    return <MobileModule id={id} page={Page.Detail} navigate={navigate} />
}
