import React from 'react';

export default function CardComponent({onRemove, onClick, children, stopPropagation}: {
    onRemove: () => void; 
    onClick: () => void; 
    stopPropagation: (e, c: ()=>void) => void;
    children: unknown
}) {
    return <div onClick={() => onClick()}>
        <button onClick={(e) => stopPropagation(e, () => onRemove())}>Supprimer</button>
        {children}
    </div>
}