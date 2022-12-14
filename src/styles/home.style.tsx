import { ButtonNavBar as _ButtonNavBar } from '../components/ButtonNavBar';
import { ExperienceContainer as _ExperienceContainer } from '../components/ExperienceContainer';
import styled from 'styled-components';
import { Particles as _Particles } from 'react-particles';
import { IconContent as _IconContent } from '../components/IconContent';

export const Particles = styled(_Particles)`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

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
  @media (max-width: 700px) {
    min-height: 400px;
    margin: 0px 10px;
    margin-top: 5%;
  }
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
  @media (max-width: 700px) {
    gap: 20px;
    padding: 10px;
  }
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
  text-align: center;
  @media (max-width: 700px) {
    font-size: 30px;
    margin-top: 10%;
  }
`;

export const DescMeText = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin: 20px 0;
  color: white;
  text-align: center;
`;

export const MeIcon = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  margin-top: 30px;
  @media (max-width: 700px) {
    width: 200px;
    height: 200px;
  }
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

export const IconContent = styled(_IconContent)`
  @media (max-width: 700px) {
    width: 80px;
    height: 80px;
  }
`;

export const ExperiencesContainer = styled.div`
  display: flex;
  height: 70%;
  gap: 20px;
  margin-top: 20px;
  width: 95%;
  @media (max-width: 700px) {
    width: 70%;
  }
`;

export const ExperienceContainer = styled(_ExperienceContainer)`
  flex: 1;
`;

export const MailContact = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  display: flex;
  color: #ffffff;
  text-align: center;
`;
