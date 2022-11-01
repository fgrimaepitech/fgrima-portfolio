import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #9c46b8 0%, #1687eb 100%);
`;

export const MainContent = styled.div`
  display: flex;
  background: rgba(16, 24, 69, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 20px 20px 45px 45px;
`;

export const NavBar = styled.div`
  display: flex;
  background: rgba(16, 24, 69, 0.3);
  backdrop-filter: blur(25px);
  padding: 10px 15px;
`;
