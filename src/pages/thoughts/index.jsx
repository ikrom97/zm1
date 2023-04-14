import React from 'react';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import ThoughtsScreen from '@/components/screens/thoughts-screen/thoughts-screen';

function index() {
  return (
    <PageWrapper withSidebar>
      <ThoughtsScreen />
    </PageWrapper>
  );
}

export default index;
