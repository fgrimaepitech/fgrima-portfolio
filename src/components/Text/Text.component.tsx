import React from 'react';
import { Text } from './Text.style';
import { TextProps } from '@chakra-ui/layout';

type Props = {
  children: React.ReactNode;
} & TextProps;

const TextComponent: React.FC<Props> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export const TextMemo = React.memo(TextComponent);
