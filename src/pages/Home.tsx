import React, { FunctionComponent, useState } from 'react';
import { ButtonNavBar } from '../components/ButtonNavBar';
import { HomeContainer, MainContent, NavBar } from '../styles/home.style';

export const Home: FunctionComponent = () => {
  const [valueButton, setValueButton] = useState('me');
  return (
    <HomeContainer>
      <MainContent>
        <h1>test</h1>
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
      </NavBar>
    </HomeContainer>
  );
};
