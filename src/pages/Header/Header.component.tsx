import React from 'react';
import { Card } from 'src/components/Card';
import { Text } from 'src/components/Text';
import {
  HContainer,
  HContainerRight,
  VContainer,
} from '../../styles/home.style';
import {
  BasedInCard,
  BasedInText,
  BasedInWrapper,
  CardTitle,
  DescCard,
  DescContent,
  DescWrapper,
  InfoCard,
  InfoHeader,
  InfoText,
  LinksCard,
  LinksWrapper,
  NameTitle,
  StatusCard,
  StatusWrapper,
  VContainerRight,
} from './Header.style';
import { LinkButton } from 'src/components/LinkButton';
import {
  IconBrandFiverr,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export const Header: React.FC = () => {
  const getInfoCardWidth = () => {
    return window.innerWidth / 5 - 100;
  };
  return (
    <HContainer>
      <VContainer>
        <CardTitle>
          <NameTitle>GRIMA Florian</NameTitle>
        </CardTitle>
        <HContainer>
          <InfoCard height={getInfoCardWidth()} backgroundColor="#215D92">
            <InfoHeader>3rd</InfoHeader>
            <InfoText>year at Epitech</InfoText>
          </InfoCard>
          <InfoCard height={getInfoCardWidth()} backgroundColor="#FFC03C">
            <InfoHeader dark>1+</InfoHeader>
            <InfoText dark>year as Dev</InfoText>
          </InfoCard>
          <InfoCard height={getInfoCardWidth()} backgroundColor="#FE6D79">
            <InfoHeader>5+</InfoHeader>
            <InfoText>well-known programming languages</InfoText>
          </InfoCard>
        </HContainer>
        <LinksCard>
          <LinksWrapper>
            <LinkButton href="https://www.google.fr/" backgroundColor="#215D92">
              <IconBrandLinkedin height={85} width={85} color="white" />
            </LinkButton>
            <LinkButton href="https://www.google.fr/" backgroundColor="#131313">
              <IconBrandGithub height={85} width={85} color="white" />
            </LinkButton>
            <LinkButton href="https://www.google.fr/" backgroundColor="#5ABB7A">
              <IconBrandFiverr height={85} width={85} color="white" />
            </LinkButton>
          </LinksWrapper>
        </LinksCard>
      </VContainer>
      <VContainer>
        <StatusCard>
          <StatusWrapper>
            <Text fontSize="x-large">Developper and IT Student</Text>
          </StatusWrapper>
        </StatusCard>
        <HContainerRight>
          <VContainerRight>
            <BasedInCard>
              <BasedInWrapper>
                <BasedInText>Based in:</BasedInText>
                <Text fontSize="x-large">Marseille (France)</Text>
              </BasedInWrapper>
            </BasedInCard>
            <DescCard>
              <DescWrapper>
                <Text fontSize="x-large" style={{ paddingTop: 40 }}>
                  About
                </Text>
                <DescContent>
                  <BasedInText fontSize="larger">
                    I’m Florian Grima, I’m currently an IT Student at Epitech
                    Marseille in France.
                  </BasedInText>
                  <BasedInText fontSize="larger">
                    I’m currently working at Gamercraft, in the French team as
                    Fullstack engineer developer.
                  </BasedInText>
                  <BasedInText fontSize="larger">
                    I’m also currently in Freelance as Fullstack developer in
                    React, Typescript, Javascript.
                  </BasedInText>
                </DescContent>
              </DescWrapper>
            </DescCard>
          </VContainerRight>
        </HContainerRight>
      </VContainer>
    </HContainer>
  );
};
