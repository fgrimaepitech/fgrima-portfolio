import React, { FunctionComponent } from 'react';
import { IconContainer, IconIcon, ValueName } from './IconContent.style';

type IconProps = {
  icon?: string;
  value: string;
  color: string;
  colorValue?: string;
};

export const IconContent: FunctionComponent<IconProps> = ({
  icon,
  value,
  color,
  colorValue,
  ...props
}) => {
  return (
    <IconContainer color={color} {...props}>
      {icon ? (
        <IconIcon alt="IconIcon" src={icon} />
      ) : (
        <ValueName color={colorValue}>{value}</ValueName>
      )}
    </IconContainer>
  );
};
