import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router";

export function Router({children, uri}: { uri: string, children}) {
    if (typeof window !== 'undefined') {
        return <BrowserRouter>{children}</BrowserRouter>
    } else {
        return <StaticRouter location={uri} context={{}}>{children}</StaticRouter>
    }
};