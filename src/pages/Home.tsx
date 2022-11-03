import Atropos from 'atropos/react';
import React, { FunctionComponent, useCallback, useState } from 'react';
import Typewriter from 'react-ts-typewriter';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { IconContact } from '../components/IconContact';
import {
  ButtonNavBar,
  ContentContainer,
  DescMeText,
  ExperienceContainer,
  ExperiencesContainer,
  HomeContainer,
  IconContent,
  MailContact,
  MainContent,
  MeContent,
  MeIcon,
  NavBar,
  Particles,
  SkillsContainer,
  TitleText,
} from '../styles/home.style';

export const Home: FunctionComponent = () => {
  const [valueButton, setValueButton] = useState('me');
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <HomeContainer>
      <Particles id="tsparticles" url="/background.json" init={particlesInit} />
      <ContentContainer>
        <MainContent>
          {valueButton === 'me' ? (
            <MeContent>
              <TitleText>{`Hi, I’m Florian Grima 👋`}</TitleText>
              <DescMeText>
                <Typewriter text="French IT student & developer" />
              </DescMeText>
              <MeIcon alt="icon-me" src="/ibok.svg" />
            </MeContent>
          ) : null}
          {valueButton === 'skills' ? (
            <MeContent>
              <TitleText>{`My skills`}</TitleText>
              <SkillsContainer>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContent
                    value="react"
                    icon="/react.svg"
                    color="#61DAFB"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContent
                    value="c"
                    color="#2926AC"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContent
                    value="html"
                    icon="/html5.svg"
                    color="#E44E25"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContent
                    value="css"
                    icon="/css.svg"
                    color="#1073BB"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContent
                    value="JS"
                    color="#F7DF1E"
                    colorValue="#000000"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContent
                    value="TS"
                    color="#3178C6"
                    colorValue="#ffffff"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContent
                    value="figma"
                    icon="/figma.svg"
                    color="#131313"
                    data-atropos-offset="10"
                  />
                </Atropos>
              </SkillsContainer>
            </MeContent>
          ) : null}{' '}
          {valueButton === 'exp' ? (
            <MeContent>
              <TitleText>{`My experiences`}</TitleText>
              <ExperiencesContainer>
                <ExperienceContainer
                  background="/backgroundGamercraft.png"
                  colorBackground="#ffffff"
                  upText="2022 (Intern)"
                  botText="Fullstack Development
Engineer"
                  logo="/gamercraftLogo.svg"
                />
                <ExperienceContainer
                  colorBackground="#180B28"
                  upText="2021 - 2026"
                  botText="PGE IT Student"
                  logo="/epitechLogo.svg"
                />
              </ExperiencesContainer>
            </MeContent>
          ) : null}
          {valueButton === 'contact' ? (
            <MeContent>
              <TitleText>{`Contact`}</TitleText>
              <SkillsContainer>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContact
                    value="github"
                    icon="/github.svg"
                    color="#131313"
                    link="https://github.com/bluefoxfr"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContact
                    value="linkedin"
                    icon="/linkedin.svg"
                    color="#007EBB"
                    link="https://www.linkedin.com/in/florian-grima-a22780210/"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <IconContact
                    value="fiverr"
                    icon="/fiverr.svg"
                    color="#5ABB7A"
                    link="https://fr.fiverr.com/soprenz"
                    data-atropos-offset="10"
                  />
                </Atropos>
                <MailContact>
                  {`Mail:`}
                  <br />
                  {`flori84@outlook.fr`}
                </MailContact>
              </SkillsContainer>
            </MeContent>
          ) : null}
        </MainContent>
        <NavBar>
          <ButtonNavBar
            isSelected={valueButton === 'me' ? true : false}
            icon="/me.svg"
            value="Me"
            onClick={() => setValueButton('me')}
          />
          <ButtonNavBar
            isSelected={valueButton === 'skills' ? true : false}
            icon="/star.svg"
            value="Skills"
            onClick={() => setValueButton('skills')}
          />
          <ButtonNavBar
            isSelected={valueButton === 'exp' ? true : false}
            icon="/work.svg"
            value="Experiences"
            onClick={() => setValueButton('exp')}
          />
          <ButtonNavBar
            isSelected={valueButton === 'contact' ? true : false}
            icon="/contact.svg"
            value="Contact"
            onClick={() => setValueButton('contact')}
          />
        </NavBar>
      </ContentContainer>
    </HomeContainer>
  );
};
