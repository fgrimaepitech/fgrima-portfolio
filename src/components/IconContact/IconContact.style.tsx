import styled from 'styled-components';

export const IconContainer = styled.a<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
  width: 100px;
  height: 100px;
  transition: 200ms ease-out;
  ${({ color }) => (color ? `background-color: ${color}` : null)};
  &:hover {
    width: 110px;
    height: 110px;
  }
  cursor: pointer;
`;

export const IconIcon = styled.img`
  width: 70px;
  height: 70px;
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
`;

export const ValueName = styled.h1<{ color: string | undefined }>`
  font-size: 60px;
  text-transform: uppercase;
  ${({ color }) => (color ? `color: ${color}` : `color: #ffffff`)};
`;
