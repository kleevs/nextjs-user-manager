import React from 'react';
import { dateToString, parseDate } from 'src/tools/format';
import Input from './input';
import { ParseInput } from './parse-input';

export default function DateInput({value, onChange}: {
    value: Date;
    onChange: (v: Date) => void;
}) {
    return <ParseInput<Date>
        Field={(_) => <Input {..._} />}
        parse={parseDate}
        toStr={dateToString}
        value={value}
        onChange={onChange}
    />
}