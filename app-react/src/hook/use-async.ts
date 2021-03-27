import { useEffect, useState } from "react";

export function useAsync<T>(promise: () => Promise<T>, defaut: T, deps: unknown[]) {
    const [state, setState]  = useState<T>(defaut);
    useEffect(() => {
        promise && promise()?.then(setState);
    }, deps || []);

    return state;
}