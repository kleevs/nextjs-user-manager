import React from "react";

import { ListModule } from 'user-manager-react/src/main'

export default function ListPage() {
    const navigate = (href: string) => { location.href = href }
    return <ListModule navigate={navigate} />
}