import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    error: 'red',
    bg_nav: '#044157',
    bg_footer: '#044157',
    btn_main: '#044157',
    btn_text_ligth: '#cecece',
    text_nav: '#f4f4f4',
    logo_a: 'rgb(299, 119, 4)',
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
