import React, { FunctionComponent } from 'react';
import {
  ScrollContainer,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import { AboutMe } from '../components/AboutMe';
import { Chapter } from '../components/Chapter';
import {
  LogoContainer,
  Logo,
  Animator,
  ScrollPage,
  IconScroll,
  LogoContainerBot,
  MeContainer,
  Avatar,
  Name,
  Description,
} from '../styles/home.style';

export const Home: FunctionComponent = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <LogoContainer>
            <Logo alt="LogoIcon" src="/bluefoxicon.png" />
            <LogoContainerBot>
              <IconScroll alt="IconScroll" src="/scrollicon.svg" />
            </LogoContainerBot>
          </LogoContainer>
        </Animator>
      </ScrollPage>
      {/* <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: '40px' }}>I'm FadeUpScrollOut ✨</span>
        </Animator>
      </ScrollPage> */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Chapter>ABOUT ME</Chapter>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <MeContainer>
            <Avatar alt="Avatar" src="/ibok.svg" />
            <Name>Florian Grima</Name>
            <Animator animation={MoveIn(-1000, 0)}>
              <Description>{`I’m IT developper and Epitech Student in Marseille.`}</Description>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
              <Description>{`I’m currently work at Gamercraft as Fullstack Developper.`}</Description>
            </Animator>
          </MeContainer>
        </Animator>
      </ScrollPage>
      {/* <ScrollPage>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <span style={{ fontSize: '40px' }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Dante Chun -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: '40px' }}>Done</span>
          <br />
          <span style={{ fontSize: '30px' }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage> */}
    </ScrollContainer>
  );
};
