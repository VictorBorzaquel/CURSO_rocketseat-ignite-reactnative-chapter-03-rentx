import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  ButtonWrapper
} from './styles';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { Footer } from '../../components/Footer';
import { SchedulingCompleteParamProp } from '../../routes/stack.routes';

export function SchedulingComplete({ navigation }: SchedulingCompleteParamProp) {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  function handleHome() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro Alugado</Title>

        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ButtonWrapper>
          <Button title="Ok" color={theme.colors.shape_dark} onPress={handleHome} />
        </ButtonWrapper>
      </Footer>

    </Container>
  );
}
