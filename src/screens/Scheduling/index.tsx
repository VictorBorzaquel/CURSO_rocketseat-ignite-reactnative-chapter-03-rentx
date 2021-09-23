import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content
} from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Calendar, DateProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { SchedulingParamProp } from '../../routes/stack.routes';
import { addDays, format } from 'date-fns';
import { getDateUTM } from '../../utils/getDateUTM';
import { useTheme } from 'styled-components';

interface RentalPeriodProps {
  // start: number;
  startFormatted: string;
  // end: number;
  endFormatted: string;
}

export function Scheduling({ navigation, route }: SchedulingParamProp) {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateProps>({} as DateProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

  const theme = useTheme();

  const { car } = route.params;

  const isNotMarkedDates = !rentalPeriod.startFormatted || !rentalPeriod.endFormatted;

  function buttonColor() {
    const color = isNotMarkedDates
      ? theme.colors.main_light
      : theme.colors.main
    return color;
  }

  function handleSchedulingDetails() {
    if (isNotMarkedDates) {
      Alert.alert('Selecione um intervalo para alugar.');
    } else {
      navigation.navigate('SchedulingDetails', { car, dates: Object.keys(markedDates) });
    }
  }

  function handleChangeDate(date: DateProps) {
    let start = !lastSelectedDate.timestamp
      ? date
      : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const intervalDates = Object.keys(interval);

    const startDate = intervalDates[0];
    const endDate = intervalDates[intervalDates.length - 1];

    setRentalPeriod({
      // start: start.timestamp,
      // end: end.timestamp,
      startFormatted: format(addDays(new Date(startDate), 1), 'dd/MM/yyyy'),
      endFormatted: format(addDays(new Date(endDate), 1), 'dd/MM/yyyy')
    })
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <BackButton type="dark" navigation={navigation} />

        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetails} color={buttonColor()} />
      </Footer>
    </Container>
  );
}
