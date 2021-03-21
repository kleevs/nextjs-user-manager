import React from 'react'; 
import { Input as StyleInput, Checkbox as StyleCheckbox } from 'user-manager-style/src/textfield';
import InputBase from './input';
import CheckboxBase from './checkbox';
import { ParseInput } from './parse-input';
import { dateToString, parseDate } from '../tools/format';

export function Input({value, onChange}: {
    value: string;
    onChange: (v: string) => void;
}) {
    return InputBase({ 
        Input: (_) => <StyleInput {..._} type='text' value={value} />,
        onChange: onChange
    });
} 

export function DateInput({value, onChange}: {
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

export function Checkbox({checked, onChange}: {
    checked: boolean;
    onChange: (v: boolean) => void;
}) {
    return CheckboxBase({ 
        Input: (_) => <StyleCheckbox {..._} type='checkbox' checked={checked} />,
        onChange: onChange
    });
} 