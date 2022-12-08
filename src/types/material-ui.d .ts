import type { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string;
      };
      type: string;
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      text: {
        hint: string;
        disabled: string;
      };
      background: {
        paper: string;
      };
    };
  }

  interface PaletteOptions {
    type?: string;
  }
}
