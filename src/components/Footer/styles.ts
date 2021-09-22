import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  padding: 24px;
  padding-bottom: ${getBottomSpace() + 24}px;
`;
