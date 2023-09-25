import styled from 'styled-components';

export const LinkButtonContainer = styled.a<{ backgroundColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
