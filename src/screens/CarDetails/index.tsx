import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
  About,
  Accessories,
  Content
} from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { StatusBar } from 'react-native';

export function CarDetails() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton
          type="light"
          onPress={() => { }}
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

        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de
          lide indultado na praça Real
          Maestranza de Sevilla. É um
          belíssimo carro para quem gosta
          de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" />
      </Footer>
    </Container>
  );
}
