import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container
} from './styles';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

interface Props extends BorderlessButtonProps {
  type: 'light' | 'dark'
}

export function BackButton({ type }: Props) {
  const theme = useTheme();
  const iconColor = type === 'light'
    ? theme.colors.text
    : theme.colors.background_secondary
  return (
    <Container>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={iconColor}
      />
    </Container>
  );
}
