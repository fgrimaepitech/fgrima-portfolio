import Atropos from 'atropos/react';
import React, { FunctionComponent } from 'react';
import {
  batch,
  Fade,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  Sticky,
} from 'react-scroll-motion';
import { Chapter } from '../components/Chapter';
import {
  Animator,
  Avatar,
  ContactIcon,
  Description,
  Icon,
  IconContainer,
  IconScroll,
  Logo,
  LogoContainer,
  LogoContainerBot,
  MeContainer,
  Name,
  ScrollPage,
} from '../styles/home.style';

export const Home: FunctionComponent = () => {
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
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Chapter>MY SKILLS</Chapter>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Atropos>
            <IconContainer data-atropos-offset="20">
              <Icon value="react" icon="/react.svg" color="#61DAFB" />
              <Icon value="c" color="#2926AC" />
              <Icon value="html" icon="/html5.svg" color="#E44E25" />
              <Icon value="css" icon="/css.svg" color="#1073BB" />
              <Icon value="JS" color="#F7DF1E" colorValue="#000000" />
              <Icon value="TS" color="#3178C6" colorValue="#ffffff" />
              <Icon value="figma" icon="/figma.svg" color="#131313" />
            </IconContainer>
          </Atropos>
        </Animator>
      </ScrollPage>
      {/* <ScrollPage>
        <Animator animation={FadeUp}>
          <Chapter>MY PROJECTS</Chapter>
        </Animator>
      </ScrollPage> */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Chapter>CONTACT ME</Chapter>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <IconContainer>
            <a href="https://github.com/bluefoxfr">
              <Atropos activeOffset={40} shadowScale={1.05}>
                <ContactIcon
                  icon="/github.svg"
                  color="#131313"
                  data-atropos-offset="10"
                />
              </Atropos>
            </a>
            <a href="https://www.linkedin.com/in/florian-grima-a22780210/">
              <Atropos activeOffset={40} shadowScale={1.05}>
                <ContactIcon
                  icon="/linkedin.svg"
                  color="#007EBB"
                  data-atropos-offset="10"
                />
              </Atropos>
            </a>
            <a href="https://fr.fiverr.com/soprenz">
              <Atropos activeOffset={40} shadowScale={1.05}>
                <ContactIcon
                  icon="/fiverr.svg"
                  color="#5ABB7A"
                  data-atropos-offset="10"
                />
              </Atropos>
            </a>
          </IconContainer>
          <Description>{`Email: flori84@outlook.fr`}</Description>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Description>{`Made by Florian Grima/bluefox with ♥️`}</Description>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};
