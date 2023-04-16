import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 26px;
  gap: 8px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: 0.3s;
  ${(props) => props?.color && `color: ${props?.color};`}

  &:hover {
    color: #111111;
  }
`;
