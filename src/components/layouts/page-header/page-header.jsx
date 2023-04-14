import React from 'react';
import { Container, Header } from './styled';
import MainLogo from '@/components/ui/main-logo/main-logo';
import MainNavigation from '../main-navigation/main-navigation';

function PageHeader() {
  return (
    <Header>
      <Container>
        <MainLogo />

        <MainNavigation />
      </Container>
    </Header>
  );
}

export default PageHeader;
