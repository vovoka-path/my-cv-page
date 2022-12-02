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
      };
      text: {
        secondary: string;
        hint: string;
        disabled: string;
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
