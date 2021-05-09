import type { stopPropagation } from '../helper/dom'
import React from 'react';

type Deps = {
    stopPropagation: typeof stopPropagation;
}

export default ({ stopPropagation }: Deps) => 
function Card({onRemove, onClick, children}: {
    onRemove: () => void; 
    onClick: () => void; 
    children: unknown
}) {
    return <div onClick={() => onClick()}>
        <button onClick={(e) => stopPropagation(e, () => onRemove())}>Supprimer</button>
        {children}
    </div>
}