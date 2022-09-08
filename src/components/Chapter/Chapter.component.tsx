import React, { FunctionComponent } from 'react';
import { TitleBorder, TitleContainer, TitleFill } from './Chapter.style';

type ChapterProps = {
  children: string;
};

export const Chapter: FunctionComponent<ChapterProps> = ({
  children,
  ...props
}) => {
  return (
    <TitleContainer {...props}>
      <TitleBorder>{children}</TitleBorder>
      <TitleBorder>{children}</TitleBorder>
      <TitleFill>{children}</TitleFill>
    </TitleContainer>
  );
};
