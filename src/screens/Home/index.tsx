import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export function Home() {
  const carData = [{
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://pngimg.com/uploads/audi/audi_PNG99491.png'
  }, {
    brand: 'Porsche',
    name: '911 turbo',
    rent: {
      period: 'Ao dia',
      price: 320,
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-porsche-911-turbo-silver-carcarvehicletransportporsche-961524645184kdemk.png'
  }]
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <TotalCars>Total de 10 Carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={carData}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Car data={item} />}
      />
    </Container>
  );
}
