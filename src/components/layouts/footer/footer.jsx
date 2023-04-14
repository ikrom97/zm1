import React from 'react';
import Text from '@/components/ui/text/text';
import { StyledFooter, FooterContainer } from './styled';
import Link from 'next/link';
import { AppRoute } from '@/const';
import SocialLinks from '@/components/ui/social-links/social-links';
import MainLogo from '@/components/ui/logo/logo';

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <MainLogo footer />

        <Text>
          Отзывы и предложения направляйте <br />
          по адресу: <Link href="mailto:info@zm-citaty.ru">info@zm-citaty.ru</Link>
        </Text>

        <Link href={AppRoute.PrivacyPolicy}>
          Пользовательское соглашение <br />
          Обработка персональных данных
        </Link>

        <SocialLinks />
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
