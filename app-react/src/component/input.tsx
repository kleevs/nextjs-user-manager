import React from 'react';

export default function Input({value, onChange}: {
    value: string;
    onChange: (v: string) => void;
}) {
    return <input type='text' value={value} onChange={(e) => onChange(e.target.value)} />
}