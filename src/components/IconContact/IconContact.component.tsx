import React, { FunctionComponent } from 'react';
import { IconContainer, IconIcon, ValueName } from './IconContact.style';

type IconProps = {
  icon?: string;
  value: string;
  color: string;
  colorValue?: string;
  link: string;
};

export const IconContact: FunctionComponent<IconProps> = ({
  icon,
  value,
  color,
  colorValue,
  link,
  ...props
}) => {
  return (
    <IconContainer color={color} {...props} href={link}>
      {icon ? (
        <IconIcon alt="IconIcon" src={icon} />
      ) : (
        <ValueName color={colorValue}>{value}</ValueName>
      )}
    </IconContainer>
  );
};
