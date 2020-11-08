import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Route } from "react-router-dom";
import { Router } from 'src/tools/router';
import { UserEngine } from 'src/engine/user.engine';
import AjaxService from 'src/domain/api/ajax.service';
const ListingModule = dynamic(() => import('src/module/list'));
const DetailModule = dynamic(() => import('src/module/detail'));

function Meta({children}) {
  return <>
    {children}
  </>
}

export default function Page({ uri, data, ...props }) {
  return <Meta>
    <Router uri={uri}>
        <Route path='/users'>
            <DetailModule user={data}/>
        </Route>
        <Route exact path='/'>
            <ListingModule users={data}/>
        </Route>
    </Router>
  </Meta>
}

const getInitialProps = async ({ asPath }) => {
  const userEngine = new UserEngine(new AjaxService());
  const uri = asPath?.split('/').filter(_ => _);
  console.log(uri);
  let data = null;
  if (!uri || uri.length <= 0) {
    data = await userEngine.list();
  } else if (uri[0] === 'users') {
    data = await userEngine.get(+uri[1] || 0) || {};
  }

  return {
    uri: `/${uri?.join('/') || ''}`,
    data: data
  };
}

Page.getInitialProps = getInitialProps;
