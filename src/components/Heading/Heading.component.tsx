import React from 'react';
import { Heading } from './Heading.style';
import { HeadingProps } from '@chakra-ui/layout';

type Props = {
  children: React.ReactNode;
} & HeadingProps;

const HeadingComponent: React.FC<Props> = ({ children, ...props }) => {
  return <Heading {...props}>{children}</Heading>;
};

export const HeadingMemo = React.memo(HeadingComponent);
