import React from 'react';
import dynamic from 'next/dynamic';
import { Route } from "react-router-dom";
import { Router } from 'src/tools/router';
import { UserEngine } from 'src/engine/user.engine';
import AjaxService from 'src/domain/api/ajax.service';
const ListingModule = dynamic(() => import('src/module/list'));
const DetailModule = dynamic(() => import('src/module/detail'));

export default function RouterModule({ uri, data }) {
  return <Router uri={uri}>
    <Route path='/users'>
        <DetailModule user={data}/>
    </Route>
    <Route exact path='/'>
        <ListingModule users={data}/>
    </Route>
</Router>
}

export async function getData({ uri }) {
    const userEngine = new UserEngine(new AjaxService());

    if (!uri) {
        return await userEngine.list();
    }

    if (uri[0] === 'users') {
        console.log(uri);
        return await userEngine.get(+uri[1] || 0);
    }
}