import React from 'react';
import Text from '@/components/ui/text/text';
import { Container, Logo, Footer } from './styled';
import Link from 'next/link';
import { AppRoute } from '@/const';
import SocialLinks from '@/components/ui/social-links/social-links';

function PageFooter() {
  return (
    <Footer>
      <Container>
        <Logo />

        <Text>
          Отзывы и предложения направляйте <br />
          по адресу: <Link href="mailto:info@zm-citaty.ru">info@zm-citaty.ru</Link>
        </Text>

        <Link href={AppRoute.PrivacyPolicy}>
          Пользовательское соглашение <br />
          Обработка персональных данных
        </Link>

        <SocialLinks />
      </Container>
    </Footer>
  );
}

export default PageFooter;
