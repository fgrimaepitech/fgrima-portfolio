import styled from 'styled-components';

export const IconContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  ${({ color }) => (color ? `background-color: ${color}` : null)};
`;

export const IconIcon = styled.img``;
