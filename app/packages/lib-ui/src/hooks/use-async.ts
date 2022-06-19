import { useEffect, useState } from "react";

export function useAsync<T>(callback: () => Promise<T>, deps: unknown[]) {
    const [value, setValue] = useState<T>();
    
    useEffect(() => { 
        callback()?.then(value => setValue(value)); 
    }, deps)

    return value;
}