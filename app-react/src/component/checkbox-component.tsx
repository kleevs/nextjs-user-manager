import React, { ChangeEvent, ComponentType } from 'react';

export default function CheckboxComponent({Input: BaseInput, onChange}: {
    Input: ComponentType<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void; }>;
    onChange: (v: boolean) => void;
}) {
    return <BaseInput onChange={(e) => onChange(e.target.checked)} />
}