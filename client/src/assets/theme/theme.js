import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const useDynamicTheme = () => {
  const companyColor = useSelector((state) => state.company.colorTheme);
  console.log(companyColor)
  const { primary, secondary, notification, background, text} = companyColor;

  const theme = createTheme({
      palette: {
        primary: {
          main: primary.main,
          main900: primary.main900,
          main700: primary.main700,
          main500: primary.main500,
        },
        secondary: {
          main: secondary.main,
          main900: secondary.main900,
          main700: secondary.main700,
          main500: secondary.main500,
        },
        notification: {
          error: notification.error,
          warning: notification.warning,
          info: notification.info,
          success: notification.success,
        },
        background: {
          default:background.default,
          grey100:background.grey100,
          grey200:background.grey200,
          grey300:background.grey300,
          grey400:background.grey400,
        },
        text: {
          primary: text.primary,
          secondary: text.secondary,
          tertiary: text.tertiary,
        },
      },
  });
  return theme;
};

export default useDynamicTheme;
