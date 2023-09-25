import React from 'react';
import { ContentWrapper, HomeContainer } from '../styles/home.style';
import { Header } from './Header/Header.component';

export const Home: React.FC = () => {
  const getInfoCardWidth = () => {
    return window.innerWidth / 5 - 100;
  };
  console.log(getInfoCardWidth());
  return (
    <HomeContainer>
      <ContentWrapper>
        <Header />
      </ContentWrapper>
    </HomeContainer>
  );
};
