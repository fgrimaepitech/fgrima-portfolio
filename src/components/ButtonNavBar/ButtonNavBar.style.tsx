import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonCircle = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 19px;
  border-radius: 100%;
  transition: 200ms ease-out;
  ${({ isSelected }) => (isSelected ? 'border: 1px solid white' : null)};
  &:hover {
    border: 1px solid white;
  }
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ValueText = styled.p<{ isSelected: boolean }>`
  ${({ isSelected }) => (isSelected ? 'display: flex' : 'display: none')};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
