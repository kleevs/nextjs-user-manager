import React from 'react';

export default function Panel({Title, children}: {
    Title: JSX.Element;
    children: unknown;
}) {
    return <div> 
    <h1>{Title}</h1> 
    <hr/>
    <div>
        {children}
    </div>
</div>
}