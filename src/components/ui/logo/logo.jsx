import React from 'react';
import { StyledLogo } from './styled';
import mainLogo from '/public/img/main-logo.svg';
import zmIcon from '/public/img/zm-icon.png';
import Image from 'next/image';
import { AppRoute } from '@/const';
import dayjs from 'dayjs';

function Logo({ footer }) {
  return (
    <StyledLogo href={AppRoute.Home}>
      <Image
        src={footer ? zmIcon : mainLogo}
        alt="На главную страницу"
      />
      {footer && <>
        &copy; Zafar Mirzo <br />
        2017 - {dayjs().format('YYYY')}
      </>}
    </StyledLogo>
  );
}

export default Logo;
