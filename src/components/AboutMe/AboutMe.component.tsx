import React, { FunctionComponent } from 'react';
import { Container, Description, Name, Avatar } from './AboutMe.style';

export const AboutMe: FunctionComponent = () => {
  return (
    <Container>
      <Avatar alt="Avatar" src="/ibok.svg" />
      <Name>Florian Grima</Name>
      <Description>{`I’m IT developper and Epitech Student in Marseille.`}</Description>
      <Description>{`I’m currently work at Gamercraft as Fullstack Developper.`}</Description>
    </Container>
  );
};
