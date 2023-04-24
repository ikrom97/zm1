import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppRoute } from '@/const';
import PageWrapper from '@/components/layouts/page-wrapper/page-wrapper';
import AuthorScreen from '@/components/screens/author-screen/author-screen';

function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push(AppRoute.Author)
  // }, [router]);

  return (
    <PageWrapper>
      <AuthorScreen />
    </PageWrapper>
  );
}

export default Home;
