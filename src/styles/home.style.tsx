import { ButtonNavBar as _ButtonNavBar } from '../components/ButtonNavBar';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #9c46b8 0%, #1687eb 100%);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  background: rgba(16, 24, 69, 0.3);
  backdrop-filter: blur(25px);
  border-radius: 20px 20px 0px 0px;
  width: -webkit-fill-available;
  height: 100%;
  margin-top: 20%;
`;

export const NavBar = styled.div`
  display: flex;
  background: rgba(16, 24, 69, 0.3);
  backdrop-filter: blur(25px);
  padding: 10px 25px;
  max-height: 70px;
  margin-top: 5px;
  margin-bottom: 20%;
  gap: 70px;
`;

export const ButtonNavBar = styled(_ButtonNavBar)``;

export const MeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TitleText = styled.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  color: white;
  padding: 0;
  margin: 0;
`;

export const DescMeText = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin: 20px 0;
  color: white;
`;

export const MeIcon = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  margin-top: 30px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  gap: 20px;
`;
