import type { Input } from '../../style';
import React from 'react'

type Deps = {
    Input: typeof Input;
}

export default ({Input}: Deps) =>
function TextField({value, error, label, onChange}: {
    label: string; 
    error: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return <>
        <label>{label}</label>
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
        {error || <></>}
    </>
}