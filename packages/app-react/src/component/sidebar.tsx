import React from "react";

export default function Sidebar({onClose}: {
    onClose: () => void;
}) {
    return <div>
        <button onClick={onClose}>Menu</button>
    </div>
}