import React from 'react';
import { Logo } from './styled';
import mainLogo from '/public/img/main-logo.svg';
import zmIcon from '/public/img/zm-icon.png';
import Image from 'next/image';
import { AppRoute } from '@/const';
import dayjs from 'dayjs';

function MainLogo({ footer }) {
  return (
    <Logo href={AppRoute.Home}>
      {footer ? (
        <>
          <Image
            src={zmIcon}
            alt="На главную страницу"
          />
          &copy; Zafar Mirzo <br />
          2017 - {dayjs().format('YYYY')}
        </>
      ) : (
        <Image
          src={mainLogo}
          alt="На главную страницу"
        />
      )}
    </Logo>
  );
}

export default MainLogo;
