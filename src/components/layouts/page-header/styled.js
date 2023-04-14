import { container } from '@/gobal-styles';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #111111;
  color: white;
  padding: 30px 0;
`;

export const Container = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
