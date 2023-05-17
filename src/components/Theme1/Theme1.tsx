import { createTheme } from '@mui/material/styles';
import '@fontsource/dancing-script';
import '@fontsource/montserrat';

const Theme1 = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FF9800',
    },
    secondary: {
      main: '#2196F3',
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
  },
});

export default Theme1;
