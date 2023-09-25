import React from 'react';
import { CardContainer } from './Card.style';

type CardProps = {
  height?: number;
  width?: number;
  children: React.ReactNode;
};

const CardComponent: React.FC<CardProps> = ({
  children,
  height,
  width,
  ...props
}) => {
  return (
    <CardContainer height={height} width={width} {...props}>
      {children}
    </CardContainer>
  );
};

export const Card = React.memo(CardComponent);
