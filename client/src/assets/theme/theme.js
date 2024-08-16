import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const useDynamicTheme = () => {
  const company = useSelector((state) => state.company.companyProfile);

  const theme = createTheme({
    palette: {
      palette: {
        primary: {
          main: '#1976d2', // Custom primary color
        },
        secondary: {
          main: '#dc004e', // Custom secondary color
        },
        error: {
          main: '#f44336', // Custom error color
        },
        background: {
          default: '#f5f5f5', // Custom background color
        },
        text: {
          primary: '#333', // Custom text color
        },
      },
    },
  });
  return theme;
};

export default useDynamicTheme;
