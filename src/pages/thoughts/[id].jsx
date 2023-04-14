import React from 'react';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import ThoughtsSelectedScreen from '@/components/screens/thoughts-selected/thoughts-screen';

function ThoughtsSelected() {
  return (
    <PageWrapper withSidebar>
      <ThoughtsSelectedScreen />
    </PageWrapper>
  );
}

export default ThoughtsSelected;
