import React from 'react';
import Head from 'next/head';
import { PageContainer } from './styled';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import Header from '../header/header';

function PageWrapper({ children, withSidebar }) {
  return (
    <>
      <Head>
        <title>Авторский сайт Зафара Мирзо</title>
      </Head>

      <Header />

      <PageContainer>
        {withSidebar && <Sidebar />}
        {children}
      </PageContainer>

      <Footer />
    </>
  );
}

export default PageWrapper;
