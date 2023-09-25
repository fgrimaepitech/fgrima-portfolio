import styled from 'styled-components';

export const CardContainer = styled.div<{ height?: number; width?: number }>`
  display: flex;
  background-color: #1e1b1e;
  border-radius: 20px;
  padding: 2% 40px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'fit-content')};
`;
