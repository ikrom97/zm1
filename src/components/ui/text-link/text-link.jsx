import React from 'react';
import { StyledLink } from './styled';

function TextLink({ children, ...rest }) {
  return (
    <StyledLink {...rest}>
      {children}
    </StyledLink>
  );
}

export default TextLink;
