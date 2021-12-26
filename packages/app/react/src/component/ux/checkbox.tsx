import React from 'react';

import styled from 'styled-components';

const CheckboxCss = () => ``;

export const CheckboxStyled = (styled.input)`${CheckboxCss()}`;

export default function Checkbox({checked, onChange}: {
    checked: boolean;
    onChange: (v: boolean) => void;
}) {
    return <CheckboxStyled checked={checked} onChange={(e) => onChange(e.target.checked)} />
}