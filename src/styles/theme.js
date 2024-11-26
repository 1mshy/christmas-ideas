import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C0392B',
    },
    secondary: {
      main: '#27AE60',
    },
    background: {
      default: '#FDFEFE',
    },
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
});

export default theme;
