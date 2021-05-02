import type { Checkbox } from '../../style';
import React from 'react';

type Deps = {
    Checkbox: typeof Checkbox;
}

export default ({Checkbox: StyleCheckbox}: Deps) =>
function Checkbox({checked, onChange}: {
    checked: boolean;
    onChange: (v: boolean) => void;
}) {
    return <StyleCheckbox checked={checked} onChange={(e) => onChange(e.target.checked)} />
}