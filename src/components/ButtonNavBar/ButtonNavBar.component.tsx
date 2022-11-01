import React, { FunctionComponent } from 'react';
import {
  ButtonCircle,
  ButtonContainer,
  Icon,
  ValueText,
} from './ButtonNavBar.style';

type Props = {
  isSelected: boolean;
  value: string;
  icon: string;
  onClick: () => void;
};

export const ButtonNavBar: FunctionComponent<Props> = ({
  isSelected,
  value,
  icon,
  ...props
}) => {
  return (
    <ButtonContainer {...props}>
      <ButtonCircle isSelected={isSelected}>
        <Icon alt="icon" src={icon} />
      </ButtonCircle>
      <ValueText isSelected={isSelected}>{value}</ValueText>
    </ButtonContainer>
  );
};
