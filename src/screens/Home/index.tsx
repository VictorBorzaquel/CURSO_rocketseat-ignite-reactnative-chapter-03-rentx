import React, { useEffect, useState } from 'react';
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
import { HomeParamProp } from '../../routes/stack.routes';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Loader } from '../../components/Load';

export function Home({ navigation }: HomeParamProp) {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  const CarListRenderItem = (car: CarDTO) => (
    <Car
      data={car}
      onPress={() => handleCarDetails(car)}
    />
  );

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, [])
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

      <Loader loading={loading}>
        <CarList
          data={cars}
          keyExtractor={car => car.id}
          renderItem={({ item: car }) => CarListRenderItem(car)}
        />
      </Loader>
    </Container>
  );
}
