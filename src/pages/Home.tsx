import React, { FunctionComponent, useState } from 'react';
import {
  HomeContainer,
  MainContent,
  NavBar,
  ButtonNavBar,
  ContentContainer,
  MeContent,
  HiText,
  DescMeText,
  MeIcon,
} from '../styles/home.style';

export const Home: FunctionComponent = () => {
  const [valueButton, setValueButton] = useState('me');
  return (
    <HomeContainer>
      <ContentContainer>
        <MainContent>
          {valueButton === 'me' ? (
            <MeContent>
              <HiText>{`Hi, I’m Florian Grima 👋`}</HiText>
              <DescMeText>{`French IT student & developper`}</DescMeText>
              <MeIcon alt="icon-me" src="/ibok.svg" />
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
