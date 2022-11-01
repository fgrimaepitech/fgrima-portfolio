import React, { FunctionComponent } from 'react';
import {
  AtroposContainer,
  BotText,
  Container,
  Content,
  Icon,
  UpContent,
  UpText,
} from './ExperienceContainer.style';

type Props = {
  background?: string;
  colorBackground: string;
  logo: string;
  upText: string;
  botText: string;
};

export const ExperienceContainer: FunctionComponent<Props> = ({
  background,
  colorBackground,
  logo,
  upText,
  botText,
  ...props
}) => {
  return (
    <AtroposContainer activeOffset={40} shadowScale={1.05} {...props}>
      <Container
        background={background}
        color={colorBackground}
        data-atropos-offset="10"
      >
        <Content>
          <UpContent>
            <UpText data-atropos-offset="11">{upText}</UpText>
            <Icon alt="icon" src={logo} data-atropos-offset="15" />
          </UpContent>
          <BotText data-atropos-offset="11">{botText}</BotText>
        </Content>
      </Container>
    </AtroposContainer>
  );
};
