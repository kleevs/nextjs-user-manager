import React from 'react';
import dynamic from 'next/dynamic';
import { Route } from "react-router-dom";
import { Router } from 'src/tools/router';
const ListingModule = dynamic(() => import('src/module/list'));
// const DetailModule = dynamic(() => import('src/module/detail'));

export default function Page({ uri }) {
    return <Router uri={uri}>
        <ListingModule />
    </Router>
}