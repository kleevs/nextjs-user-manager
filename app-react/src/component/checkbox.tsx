import React from 'react';

export default function Checkbox({checked, onChange}: {
    checked: boolean;
    onChange: (v: boolean) => void;
}) {
    return <input type="checkbox" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)}
    />
}