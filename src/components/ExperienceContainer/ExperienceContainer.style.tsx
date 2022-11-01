import styled from 'styled-components';
import Atropos from 'atropos/react';

export const AtroposContainer = styled(Atropos)``;

export const Container = styled.div<{
  background: string | undefined;
  color: string;
}>`
  border-radius: 8px;
  ${({ color }) => (color ? `background-color: ${color}` : null)};
  ${({ background }) => (background ? `background: url(${background})` : null)};
  flex: 1;
  transition: 200ms ease-out;
  &:hover {
    scale: 1.05;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 450px;
  @media (max-width: 700px) {
    height: 300px;
  }
  z-index: 1;
`;

export const UpContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UpText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  color: #ffffff;
  text-align: center;
  margin-top: 15px;
`;

export const BotText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  margin-top: 30px;
`;
