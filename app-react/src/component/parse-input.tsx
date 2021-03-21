import { useState } from 'react';

export function ParseInput<T>({ Field, parse, toStr, value, onChange }: {
    Field: (v: {
        value: string,
        onChange: (v: string)=>void;
    }) => JSX.Element;
    parse: (v: string) => T;
    toStr: (v: T, c: string) => string;
    value: T,
    onChange: (v: T)=>void;
}) {
    const [state] = useState(() => ({ value: toStr(value, '') }));
    const { value: input } = state;

    return Field({
        value: toStr(value, input),
        onChange: (v) => { 
            state.value = v;
            onChange(parse(v))
        }
    })
}