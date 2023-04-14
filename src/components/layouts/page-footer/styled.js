import MainLogo from '@/components/ui/main-logo/main-logo';
import { container } from '@/gobal-styles';
import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: auto;
  padding: 56px 0;
  background-color: #111111;
  color: white;
`;

export const Container = styled.div`
  ${container}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
`;

export const Logo = styled(MainLogo).attrs({
  footer: true,
})``;
