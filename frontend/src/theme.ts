import { createTheme } from '@mui/material/styles';
import { amber, orange, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: amber,
    secondary: orange,
    error: {
      main: red.A400,
    },
  }
});

export default theme;