import styled from 'styled-components';
import {
  Animator as _Animator,
  ScrollPage as _ScrollPage,
} from 'react-scroll-motion';

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
