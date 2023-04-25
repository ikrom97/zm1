import React from 'react';
import Text from '@/components/ui/text/text';
import Link from 'next/link';
import MainLogo from '@/components/ui/logo/logo';
import style from './style.module.css';
import Container from '@/components/ui/container/container';

function Footer() {
  return (
    <footer className={style.footer}>
      <Container className={style.footerContainer}>
        <MainLogo footer />

        <Text>For feedback: <Link href="mailto:info@zafarmirzo.com">info@zafarmirzo.com</Link></Text>
      </Container>
    </footer>
  );
}

export default Footer;
