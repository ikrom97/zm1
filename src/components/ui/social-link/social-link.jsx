import React from 'react';
import { StyledLink } from './styled';

function SocialLink({ icon, title, label, href }) {
  return (
    <StyledLink href={href} title={title} aria-label={label}>
      {icon}
    </StyledLink>
  );
}

export default SocialLink;
