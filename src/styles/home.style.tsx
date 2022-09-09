import styled from 'styled-components';
import {
  Animator as _Animator,
  ScrollPage as _ScrollPage,
} from 'react-scroll-motion';
import { Icon as _Icon } from '../components/Icon';
import { ContactIcon as _ContactIcon } from '../components/ContactIcon';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  gap: 200px;
`;

export const LogoContainerBot = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 113.86px;
  height: 138px;
`;

export const IconScroll = styled.img`
  width: 30px;
  height: 40px;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-delay: 250ms;
  animation-name: glissement;
  animation-iteration-count: infinite;
}
@keyframes glissement {
  from {
    margin-top: 100%;
    height: 300%;
  }

  to {
    margin-top: 0%;
    height: 100%;
  }
`;

export const Animator = styled(_Animator)`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ScrollPage = styled(_ScrollPage)`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const MeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

export const Name = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: #fff;
`;

export const Description = styled.h1`
  font-size: 30px;
  font-weight: 500;
  max-width: 800px;
  color: #fff;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 15px;
    max-width: 300px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(_Icon)`
  width: 150px;
  height: 150px;
  padding: 10px;
  margin: 10px;
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
    margin: 30px;
    background-color: transparent;
  }
`;

export const ContactIcon = styled(_ContactIcon)`
  width: 150px;
  height: 150px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;
