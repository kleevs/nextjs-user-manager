import React from 'react';

export default function TextLabelComponent({label, children}: {
    children: unknown;
    label: string;
}) {
    return <>
        <label>{label}</label>
        {children}
    </>
}