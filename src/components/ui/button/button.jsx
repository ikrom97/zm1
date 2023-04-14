import React from 'react';
import { StyledButton } from './styled';
import Link from 'next/link';

function Button({ children, href, ...rest }) {
  return href ? (
    <StyledButton as={Link} {...rest}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
