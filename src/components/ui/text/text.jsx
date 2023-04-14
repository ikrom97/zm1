import React from 'react';
import { StyledText } from './styled';

function Text({ children, color }) {
  return (
    <StyledText color={color}>
      {children}
    </StyledText>
  );
}

export default Text;
