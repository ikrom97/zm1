import Image from 'next/image';
import styled from 'styled-components';
import { StyledTitle } from '../title/styled';
import Text from '../text/text';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const PostImage = styled(Image)`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const PostTitle = styled(({ children, ...rest }) => (
  <StyledTitle {...rest} as="h3">
    {children}
  </StyledTitle>
))`
  margin-bottom: 8px;
`;

export const PostDescription = styled(Text)`
  color: #747474;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;