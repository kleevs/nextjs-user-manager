import { useRouter } from "next/router";
import { useMemo } from "react";
import { AppContext } from "user-manager";

export function useAppContext() {
    const router = useRouter();    
    return useMemo<AppContext>(() => ({ 
        uri: {
            home: '/',
            detail: '/users/:id'
        },
        moveTo: (href: string) => {
            router.push(href)
        }
    }), [router]);
}

