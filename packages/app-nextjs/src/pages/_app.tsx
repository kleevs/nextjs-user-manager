import React from 'react';
import App from 'next/app';
// import 'node_modules/bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async function getInitialProps(appContext) {
  const { req, res } = appContext.ctx;
  const appProps = await App.getInitialProps(appContext);  
  if (req?.headers?.accept?.split(',').filter(_ => _ === 'text/html')[0]) {
    return { ...appProps }
  } else {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.write(JSON.stringify(appProps));
    res.end();

    return {
      props: {}
    };
  } 
}