import { ChangeEvent, FunctionComponent } from 'react';

export default function Checkbox({Input: BaseInput, onChange}: {
    Input: FunctionComponent<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void; }>;
    onChange: (v: boolean) => void;
}) {
    return BaseInput({ onChange: (e) => onChange(e.target.checked) });
}