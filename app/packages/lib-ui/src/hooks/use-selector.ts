import { useEffect, useState } from "react";
import { Store } from "lib";

export function useSelector<T>(store: Store<T>): T;
export function useSelector<T, T2>(store: Store<T>, selector: (v: T) => T2): T2
export function useSelector<T, T2>(store: Store<T>, selector?: (v: T) => T2): T2 {
    const sel = selector || ((v: T) => v as any as T2);
    const [value, setValue] = useState(() => sel(store.getValue()));
    
    useEffect(() => store.onUpdate(v => setValue(selector(v))), [])

    return value;
}