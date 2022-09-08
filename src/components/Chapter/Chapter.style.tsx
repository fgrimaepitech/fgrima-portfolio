import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleFill = styled.h1`
  margin: 0;
  font-size: 128px;
  background: linear-gradient(90deg, #394462 0%, #7293e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TitleBorder = styled.h1`
  margin: 0;
  font-size: 128px;
  font-weight: 900;
  color: #1b202c;
  background: -webkit-linear-gradient(90deg, #394462 0%, #7293e1 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 2px transparent;
  display: block;
  text-transform: uppercase;
  clip-path: inset(-1% -1% 50% -1%);
  margin-bottom: -134px;
`;
