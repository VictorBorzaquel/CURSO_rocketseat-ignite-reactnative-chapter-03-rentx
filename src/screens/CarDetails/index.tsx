import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
import { CarDetailsParamProp } from '../../routes/stack.routes';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';


export function CarDetails({ navigation, route }: CarDetailsParamProp) {
  const { car } = route.params;
  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car });
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
          imageUrl={car.photos}
        />
      </CardImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory =>
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            )
          }

          {/* <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasoline" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} /> */}
        </Accessories>

        <About>
          {car.about}
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
