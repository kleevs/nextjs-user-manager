import type { Input } from '../../style';
import type { dateToString, parseDate } from '../../tools/format';
import React, { useState } from 'react'

type Deps = {
    Input: typeof Input;
    dateToString: typeof dateToString;
    parseDate: typeof parseDate;
}

export default ({Input, dateToString, parseDate}: Deps) =>
function DateField({label, error, value, onChange}: {
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