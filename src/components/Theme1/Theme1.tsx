import { createTheme } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//   interface Theme {
//     palette: {
//       type: string;
//     };
//   }

//   // allow configuration using `createTheme`
//   interface PaletteOptions {
//     type?: string;
//   }
// }

const Theme1 = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FF9800',
      // main: '#d9dee1',

      // main: '#0C61A2',
      // light: '#757ce8',
      // main: '#3f50b5',
      // dark: '#002884',
      // contrastText: '#fff',
    },
    secondary: {
      main: '#2196F3',
      // main: '#333333',
      // main: '#a24d0c',
      // light: 'rgba(33, 150, 243, 0.56)',
      light: '#70c4f6',
      dark: '#092339',
      contrastText: '#085391',
    },
    text: {
      hint: 'rgba(0,0,0,0.33)',
      disabled: 'rgba(0,0,0,0.25)',
    },
  },
  typography: {
    // fontFamily: 'Oswald',
    fontFamily: 'Montserrat, sans, Dancing Script',
    h1: {
      fontSize: '4rem',
      '@media (max-width:480px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3rem',
      '@media (max-width:480px)': {
        fontSize: '1.7rem',
      },
    },
    h3: {
      fontSize: '2.3rem',
      '@media (max-width:480px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.7rem',
      '@media (max-width:480px)': {
        fontSize: '1.3rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      '@media (max-width:480px)': {
        fontSize: '1.2rem',
      },
    },
    body1: {
      fontWeight: 300,
    },
    // fontSize: '26px',
    // '@media print': {
    //   fontSize: '10px',
    // },
  },
});

export default Theme1;
