import React from 'react';
import { LinkButtonContainer } from './LinkButton.style';

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
  href: string;
};

const LinkButtonComponent: React.FC<Props> = ({
  children,
  backgroundColor,
  href,
  ...props
}) => {
  return (
    <LinkButtonContainer
      href={href}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </LinkButtonContainer>
  );
};

export const LinkButton = React.memo(LinkButtonComponent);
