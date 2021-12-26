import React from 'react';
import { stopPropagation } from 'lib'

export default function Card({onRemove, onClick, children}: {
    onRemove: () => void; 
    onClick: () => void; 
    children: unknown
}) {
    return <div onClick={() => onClick()}>
        <button onClick={(e) => stopPropagation(e, () => onRemove())}>Supprimer</button>
        {children}
    </div>
}