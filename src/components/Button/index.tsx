import React from 'react';
import { useTheme } from 'styled-components';

import {
  Container, Title
} from './styles';

interface Props {
  title: string;
  color?: 'default' | 'checkout' | string;
  // onPress: () => void;
}

export function Button({
  title,
  color = 'default',
  ...rest
}: Props) {
  const theme = useTheme();

  function getColor() {
    switch (color) {
      case 'default':
        return theme.colors.main;
      case 'checkout':
        return theme.colors.success;
      default:
        return color
    }
  }

  const buttonColor = getColor();

  return (
    <Container color={buttonColor} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
