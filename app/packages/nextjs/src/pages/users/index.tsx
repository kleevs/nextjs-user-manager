import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/router'
import { DetailDataDeps, UserAccount, DetailModule } from "user-manager";
import { createStore } from "lib";
import { useHrefEffect } from "src/hooks/use-href-effect";

function createListPageData() {
    const user: UserAccount = null;
    const result: DetailDataDeps = { 
        meta: {
            uri: {
                detail: '/users/:id'
            }
        },
        user, 
        href: '/users',
    };

    return result;
}

export default function DetailPage() {
    const pageData = useMemo(() => createStore(createListPageData()), []);
    useHrefEffect(pageData);

    return <DetailModule pageData={pageData} />
}
