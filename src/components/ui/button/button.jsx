import React from 'react';
import { StyledButton } from './styled';
import Link from 'next/link';

function Button({ children, href, type = "button", title }) {
  return href ? (
    <StyledButton as={Link} href={href} title={title}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton type={type} title={title}>
      {children}
    </StyledButton>
  );
}

export default Button;
