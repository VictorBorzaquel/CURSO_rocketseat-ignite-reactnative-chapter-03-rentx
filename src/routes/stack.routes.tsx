import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CarDTO } from '../dtos/CarDTO';
import { MarkedDateProps } from '../components/Calendar';

export type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO, dates: string[] };
  SchedulingComplete: undefined;
};

export type StackParamProp = NativeStackScreenProps<RootStackParamList>;

export type HomeParamProp = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type CarDetailsParamProp = NativeStackScreenProps<RootStackParamList, 'CarDetails'>;
export type SchedulingParamProp = NativeStackScreenProps<RootStackParamList, 'Scheduling'>;
export type SchedulingDetailsParamProp = NativeStackScreenProps<RootStackParamList, 'SchedulingDetails'>;
export type SchedulingCompleteParamProp = NativeStackScreenProps<RootStackParamList, 'SchedulingComplete'>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{ title: 'Detalhes do Carro' }}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{ title: 'Agendamento' }}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{ title: 'Detalhes do Agendamento' }}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
        options={{ title: 'Agendamento Completo' }}
      />
    </Navigator>
  );
}