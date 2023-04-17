import React from 'react';
import { StyledScreen } from './styled';
import BlockQuote from '@/components/ui/quote-card/quote-card';
import dynamic from 'next/dynamic';

const DynamicComments = dynamic(() => import('@/components/ui/comments/comments'), {
  ssr: false
})

function QuotesSelectedScreen() {
  return (
    <StyledScreen>
      <BlockQuote />
      <DynamicComments />
    </StyledScreen>
  );
}

export default QuotesSelectedScreen;
