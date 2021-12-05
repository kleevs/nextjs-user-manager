import React from "react";
import { ListModule } from 'user-manager-react'

export default function ListPage() {
    const navigate = (href: string) => { location.href = href }
    return <ListModule navigate={navigate} />
}