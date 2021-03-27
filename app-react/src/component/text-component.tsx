import React, { ChangeEvent, ComponentType } from 'react';

export default function TextComponent({Input, onChange}: {
    Input: ComponentType<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void; }>;
    onChange: (v: string) => void;
}) {
    return <Input onChange={(e) => onChange(e.target.value)} />
}