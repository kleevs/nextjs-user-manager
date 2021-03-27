import React from 'react'; 
import { Input as StyleInput, Checkbox as StyleCheckbox } from 'user-manager-style/src/textfield';
import CheckboxComponent from './checkbox-component';
import ParseComponent from './parse-component';
import TextComponent from './text-component';
import { dateToString, parseDate } from '../tools/format';
import FieldError from './field-error';
import { useComponent } from '../hook/use-component';

export function TextField({value, ...props}: {
    value: string;
    onChange: (v: string) => void;
}) {
    return <TextComponent {...props} 
        Input={useComponent((_) => <StyleInput type='text' {..._} value={value} />)}
    />
}

export function TextFieldWithError({error, ...props}: {
    error: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return <FieldError error={error}><TextField {...props}/></FieldError>
}

export function DateField({value, ...props}: {
    value: Date;
    onChange: (v: Date) => void;
}) {
    return <ParseComponent<Date> {...props} 
        Field={TextField}
        parse={parseDate}
        toStr={dateToString}
        value={value}
    />
}

export function DateFieldWithError({error, ...props}: {
    error: string;
    value: Date;
    onChange: (v: Date) => void;
}) {
    return <FieldError error={error}><DateField {...props}/></FieldError>
}

export function Checkbox({checked, ...props}: {
    checked: boolean;
    onChange: (v: boolean) => void;
}) {
    return <CheckboxComponent {...props}
        Input={useComponent((_) => <StyleCheckbox {..._} type='checkbox' checked={checked} />)}
    />
} 

export function CheckboxWithError({error, ...props}: {
    error: string;
    checked: boolean;
    onChange: (v: boolean) => void;
}) {
    return <FieldError error={error}><Checkbox {...props}/></FieldError>
}