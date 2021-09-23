import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

export function Load() {
  const theme = useTheme();
  return (
    <ActivityIndicator
      color={theme.colors.main}
      size="large"
      style={{ flex: 1 }}
    />
  );
}

interface Props {
  children?: JSX.Element | JSX.Element[];
  loading: boolean;
}

export function Loader({ children, loading }: Props) {
  return (
    <>
      {
        loading
          ? <Load />
          : (children || <></>)
      }
    </>
  );
}