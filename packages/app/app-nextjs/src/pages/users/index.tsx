import React from "react";
import { useRouter } from 'next/router'
import { MobileModule, Page } from 'user-manager-react'

export default function DetailPage() {
    const router = useRouter();
    const navigate = (href: string) => { 
        router.push(href); 
    }
    return <MobileModule id={0} page={Page.Detail} navigate={navigate} />
}
