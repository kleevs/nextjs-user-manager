import React, { ComponentType, useState } from 'react';

export default function ParseComponent<T>({ Field, parse, toStr, value, onChange }: {
    Field: ComponentType<{
        value: string,
        onChange: (v: string)=>void;
    }>;
    parse: (v: string) => T;
    toStr: (v: T, c: string) => string;
    value: T,
    onChange: (v: T)=>void;
}) {
    const [state] = useState(() => ({ value: toStr(value, '') }));
    const { value: input } = state;

    return <Field
        value={toStr(value, input)}
        onChange={(v) => { 
            state.value = v;
            onChange(parse(v))
        }}
    />
}