import { dateToString, parseDate } from 'lib';
import React, { useState } from 'react'
import styled from 'styled-components';

const Input = styled.input``;

export function DateField({label, error, value, onChange}: {
    label: string; 
    error: string;
    value: Date;
    onChange: (v: Date) => void;
}) {
    const [state] = useState(() => ({ value: dateToString(value, '') }));
    const { value: input } = state;

    return <>
        <label>{label}</label>        
        <Input
            value={dateToString(value, input)}
            onChange={({ target: { value: v }}) => { 
                state.value = v;
                onChange(parseDate(v))
            }}
        />
        {error || <></>}
    </>
}