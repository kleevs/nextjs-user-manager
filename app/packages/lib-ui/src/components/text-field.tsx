import React from 'react'
import styled from 'styled-components';

const Input = styled.input``;

export function TextField({value, error, label, onChange}: {
    label: string; 
    error: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return <>
        <label>{label}</label>
        <Input value={value || ''} onChange={(e) => onChange(e.target.value)} />
        {error || <></>}
    </>
}