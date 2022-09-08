import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
`;

export const TitleFill = styled.h1`
  margin: 0;
  font-size: 128px;
  background: linear-gradient(90deg, #394462 0%, #7293e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 60px;
  }
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
  @media (max-width: 700px) {
    font-size: 60px;
    margin-bottom: -60px;
  }
`;
