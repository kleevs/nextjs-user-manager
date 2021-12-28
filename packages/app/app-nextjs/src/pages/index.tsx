import React from "react";
import { useRouter } from 'next/router'
import { MobileModule, Page } from 'user-manager-react'

export default function ListPage() {
    const router = useRouter();
    const navigate = (href: string) => { 
        router.push(href); 
    }
    return <MobileModule id={0} page={Page.List} navigate={navigate} />
}
