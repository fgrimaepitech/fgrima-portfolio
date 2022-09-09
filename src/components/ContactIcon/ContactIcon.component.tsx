import React, { FunctionComponent } from 'react';
import { IconContainer, IconIcon } from './ContactIcon.style';

type ContactIconProps = {
  icon: string;
  color: string;
};

export const ContactIcon: FunctionComponent<ContactIconProps> = ({
  icon,
  color,
  ...props
}) => {
  return (
    <IconContainer {...props} color={color}>
      <IconIcon src={icon} alt={'icon'} />
    </IconContainer>
  );
};
