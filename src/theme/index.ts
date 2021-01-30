import { Dimensions } from 'react-native';
import baseStyled, {
  ReactNativeStyledInterface,
  ThemeContext,
  css,
} from 'styled-components/native';
const { width, height } = Dimensions.get('screen');

const colors = {
  linen: '#FEF8F2',
  morOrange: '#FD7F00',
};

const fontSize = {
  h1: 22,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
};
const sizes = {
  heightButton: 44,
  heightInput: 44,
  screenWidth: width,
  screenHeight: height,
};

const theme = {
  colors,
  fontSize,
  sizes,
};

export type Theme = typeof theme;

// @ts-ignore
const styled = baseStyled as ReactNativeStyledInterface<Theme>;

export { ThemeContext, styled, theme as default, css };
