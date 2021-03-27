import React from 'react';

export default function FieldError({error, children}: {
    error: string;
    children: unknown;
}) {
    return <>{children}{error}</>
}