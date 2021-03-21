import { FunctionComponent, ChangeEvent } from 'react';

export default function Input({Input: BaseInput, onChange}: {
    Input: FunctionComponent<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void; }>;
    onChange: (v: string) => void;
}) {
    return BaseInput({ onChange: (e) => onChange(e.target.value) });
}