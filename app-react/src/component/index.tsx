import React from 'react'; 
import { Input as StyleInput, Checkbox as StyleCheckbox } from 'user-manager-style/src/textfield';
import CheckboxComponent from './checkbox-component';
import ParseComponent from './parse-component';
import TextComponent from './text-component';
import { dateToString, parseDate } from '../tools/format';
import FieldError from './field-error';
import { useComponent } from '../hook/use-component';
import TextLabelComponent from './text-label-component';

export function TextField({value, ...props}: {
    value: string;
    onChange: (v: string) => void;
}) {
    return <TextComponent {...props} 
        Input={useComponent((_) => <StyleInput type='text' {..._} value={value} />)}
    />
}

export function TextLabelField({label, ...props}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return <TextLabelComponent label={label}>
        <TextField {...props} />
    </TextLabelComponent> 
}

export function TextFieldWithError({error, ...props}: {
    error: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return <FieldError error={error}><TextField {...props}/></FieldError>
}

export function TextLabelFieldWithError({error, ...props}: {
    error: string;
    value: string;
    label: string;
    onChange: (v: string) => void;
}) {
    return <FieldError error={error}><TextLabelField {...props}/></FieldError>
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

export function DateLabelField({label, ...props}: {
    label: string;
    value: Date;
    onChange: (v: Date) => void;
}) {
    return <TextLabelComponent label={label}>
        <DateField {...props} />
    </TextLabelComponent> 
}

export function DateFieldWithError({error, ...props}: {
    error: string;
    value: Date;
    onChange: (v: Date) => void;
}) {
    return <FieldError error={error}><DateField {...props}/></FieldError>
}

export function DateLabelFieldWithError({error, ...props}: {
    label: string;
    error: string;
    value: Date;
    onChange: (v: Date) => void;
}) {
    return <FieldError error={error}><DateLabelField {...props}/></FieldError>
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