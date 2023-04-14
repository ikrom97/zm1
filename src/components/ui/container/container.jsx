import React from 'react';
import { StyledContainer } from './styled';

function Container({ className, children }) {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
}

export default Container;
