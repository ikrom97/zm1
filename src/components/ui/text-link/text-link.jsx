import React from 'react';
import { StyledLink } from './styled';

function TextLink({ children }) {
  return (
    <StyledLink>
      {children}
    </StyledLink>
  );
}

export default TextLink;
