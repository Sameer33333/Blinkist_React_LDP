import React from "react";
import { addDecorator } from '@storybook/react';
import {theme}  from '../src/themes/themes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../public/style.css';

addDecorator((Story) => (
  <ThemeProvider theme={theme}><Story/></ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}