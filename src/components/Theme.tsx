import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const theme: DefaultTheme = {
  screenWidth: width,
  colors: {
    error: 'red',
    bg_nav: '#044157',
    bg_footer: '#044157',
    bg_modal: '#f8f8f8',
    btn_main: '#044157',
    btn_text_ligth: '#cecece',
    text_nav: '#f4f4f4',
    logo_a: 'rgb(299, 119, 4)',
  },
  font: {
    base: 'Roboto, sans-serif',
  },
  input: {
    font_size: '1.4rem',
    label_font_size: '1.4rem',
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
