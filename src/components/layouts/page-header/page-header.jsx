import React from 'react';
import { Header, HeaderContainer } from './styled';
import MainLogo from '@/components/ui/main-logo/main-logo';
import MainNavigation from '../main-navigation/main-navigation';

function PageHeader() {
  return (
    <Header>
      <HeaderContainer>
        <MainLogo />
          
        <MainNavigation />
      </HeaderContainer>
    </Header>
  );
}

export default PageHeader;
