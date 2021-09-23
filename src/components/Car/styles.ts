import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background_secondary};

  width: 100%;
  height: 126px;

  padding: 24px;
  margin-bottom: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text_detail};

  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};

  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
`;

export const Type = styled.View`
  align-self: flex-end;
`;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
