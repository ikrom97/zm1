import React from 'react';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import Head from 'next/head';

function PageWrapper({ children }) {
  return (
    <>
      <Head>
        <title>Авторский сайт Зафара Мирзо</title>
      </Head>

      <PageHeader />
      
      {children}
      
      <PageFooter />
    </>
  );
}

export default PageWrapper;
