import React from 'react';

export default function PanelComponent({title, children}: {
    title: JSX.Element | string;
    children: unknown;
}) {
    return <div> 
    <h1>{title}</h1> 
    <hr/>
    <div>
        {children}
    </div>
</div>
}