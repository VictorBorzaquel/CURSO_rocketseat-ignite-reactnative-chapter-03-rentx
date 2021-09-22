import React from 'react';

import {
  Container
} from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export function Footer({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}
