import { useRouter } from "next/router";
import { useEffect } from "react";

type PageData = {
    onUpdate: (deps: (value: { href: string }) => unknown[], callback: (value: { href: string }) => void) => () => void;
}

export function useHrefEffect(pageData: PageData) {
    const router = useRouter();
    useEffect(() => pageData.onUpdate(({ href }) => [href], ({href}) => router.push(href)), [router, pageData])
}