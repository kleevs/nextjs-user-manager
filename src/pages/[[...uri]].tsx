import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import RouterModule, { getData } from 'src/module/router';

export default function SigninPage({ uri, data }) {
  return <Meta>
    <RouterModule uri={uri} data={data} />
  </Meta>
}
export const getServerSideProps: GetServerSideProps = async ({params : { uri }, req, res }) => {
  const data = await getData({ uri }) || '';
  if (req?.headers?.accept?.split(',').filter(_ => _ === 'text/html')[0]) {
    return {
      props: {
        uri: `/${uri || ''}`,
        data: data
      }
    };
  } else {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.write(JSON.stringify(data));
    res.end();

    return {
      props: {}
    };
  } 
}

function Meta({children}) {
  return <>
    {children}
  </>
}