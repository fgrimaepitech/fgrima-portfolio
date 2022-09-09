import styled from 'styled-components';

export const IconContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  ${({ color }) => (color ? `background-color: ${color}` : null)};
`;

export const IconIcon = styled.img``;

export const ValueName = styled.h1<{ color: string | undefined }>`
  font-size: 96px;
  text-transform: uppercase;
  ${({ color }) => (color ? `color: ${color}` : `color: #ffffff`)};
`;
