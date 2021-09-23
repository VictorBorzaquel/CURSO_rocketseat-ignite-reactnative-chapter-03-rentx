import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: space-evenly;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(30)}px;

  padding-top: 40px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  text-align: center;

  padding-top: 16px;
`;

export const ButtonWrapper = styled.View`
  width: 80px;
  align-self: center;
`;
