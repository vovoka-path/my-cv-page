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
        // secondary: string;
        hint: string;
        disabled: string;
      };
      background: {
        paper: string;
      };
      // typography: {
      //   fontSize: string;
      //   '@media print': {
      //     fontSize: string;
      //   };
      // };
    };
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    type?: string;
  }
}
