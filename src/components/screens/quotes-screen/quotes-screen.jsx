import React from 'react';
import { Footer, StyledScreen } from './styled';
import BlockQuote from '@/components/ui/quote-card/quote-card';
import ScrollTop from '@/components/ui/scroll-top/scroll-top';
import Pagination from '@/components/ui/pagination/pagination';

function QuotesScreen() {
  return (
    <StyledScreen>
      {Array.from({ length: 10 }, (_, key) => (
        <BlockQuote key={key} />
      ))}

      <Footer>
        <Pagination />
        <ScrollTop />
      </Footer>
    </StyledScreen>
  );
}

export default QuotesScreen;
