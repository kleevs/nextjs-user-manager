import React from "react";

export function Sidebar({onClose}: {
    onClose: () => void;
}) {
    return <div>
        <button onClick={onClose}>Menu</button>
    </div>
}