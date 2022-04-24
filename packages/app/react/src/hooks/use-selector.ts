import { useEffect, useState } from "react";

type Store<T> = {
    getValue: () => T;
    onUpdate: (callback: (v: T) => void) => () => void;
}

export function useSelector<T, T2>(store: Store<T>, selector: (v: T) => T2) {
    const [value, setValue] = useState(() => selector(store.getValue()));
    
    useEffect(() => store.onUpdate(v => setValue(selector(v))), [])

    return value;
}