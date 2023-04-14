import React from 'react';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';

function PageWrapper({ children }) {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}

export default PageWrapper;
