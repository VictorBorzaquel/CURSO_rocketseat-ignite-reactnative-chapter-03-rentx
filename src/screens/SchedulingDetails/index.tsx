import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { Feather } from '@expo/vector-icons';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  CardImages,
  Container,
  Header,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Content,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  FooterWrapper,
  TotalPeriod,
  TotalDetails,
  TotalTitle,
  TotalPerDay,
  TotalValue,
} from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { SchedulingDetailsParamProp } from '../../routes/stack.routes';

export function SchedulingDetails({ navigation, route }: SchedulingDetailsParamProp) {
  const theme = useTheme();

  const { car, dates } = route.params;

  function handleSchedulingComplete() {
    navigation.navigate('SchedulingComplete');
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton
          type="light"
          navigation={navigation}
        />
      </Header>

      <CardImages>
        <ImageSlider
          imageUrl={['https://pngimg.com/uploads/audi/audi_PNG99491.png']}
        />
      </CardImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>TS 50</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasoline" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.background_secondary}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(20)}
            color={theme.colors.shape}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <TotalPeriod>
          <TotalDetails>
            <TotalTitle>TOTAL</TotalTitle>
            <TotalPerDay>R$ 580 x 3 diárias</TotalPerDay>
          </TotalDetails>

          <TotalValue>R$ 2.900</TotalValue>
        </TotalPeriod>
      </Content>

      <FooterWrapper>
        <Footer>
          <Button title="Alugar Agora" color="checkout" onPress={handleSchedulingComplete} />
        </Footer>
      </FooterWrapper>
    </Container>
  );
}
