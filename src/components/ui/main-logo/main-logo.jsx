import React from 'react';
import { Logo } from './styled';
import mainLogo from '/public/img/main-logo.svg';
import Image from 'next/image';
import { AppRoute } from '@/const';

function MainLogo() {
  return (
    <Logo href={AppRoute.Home}>
      <Image 
        src={mainLogo}
        alt="На главную страницу"
      />
    </Logo>
  );
}

export default MainLogo;
