import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container
} from './styles';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { StackParamProp } from '../../routes/stack.routes';

type Props = BorderlessButtonProps & {
  type: 'light' | 'dark',
  navigation: {
    goBack(): void;
  }
}

export function BackButton({ navigation, type, ...rest }: Props) {
  function handleGoBack() {
    navigation.goBack();
  }

  const theme = useTheme();
  const iconColor = type === 'light'
    ? theme.colors.text
    : theme.colors.background_secondary
  return (
    <Container {...rest} onPress={handleGoBack}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={iconColor}
      />
    </Container>
  );
}
