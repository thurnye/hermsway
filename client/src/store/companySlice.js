import { createSlice } from '@reduxjs/toolkit';

const defaultTheme = {
  primary: {
    main: '#1976d2',
    main900: '#115293',
    main700: '#2196f3',
    main500: '#4dabf5',
  },
  secondary: {
    main: '#dc004e',
    main900: '#1769aa',
    main700: '#2196f3',
    main500: '#4dabf5',
  },
  notification: {
    error: '#ef5350',
    warning: '#ff9800',
    info: '#03a9f4',
    success: '#4caf50',
  },
  background: {
    default: '#f3f3f3',
    grey100: '#f6f6f6',
    grey200: '#ddd',
    grey300: '#c2c2c2',
    grey400: '#7b7b7b',
  },
  text: {
    primary: '#343434',
    secondary: '#f3f3f3',
    tertiary: '#fff',
  },
};

const initial = {
  companyProfile: null,
  colorTheme: defaultTheme,
};

const companySlice = createSlice({
  name: 'company',
  initialState: initial,
  reducers: {
    restCompanyData (state) {
      state.companyProfile = null;
      state.colorTheme = defaultTheme;
    },
    getCompany(state, action) {
      console.log("PAYLOAD", action.payload)
      state.companyProfile = action.payload;
      state.colorTheme = action.payload.companyConfig.colorTheme
    },
    getCompanyColorTheme(state, action) {
      const { type, key, color } = action.payload;
      if (state.colorTheme[type] && state.colorTheme[type][key] !== undefined) {
        state.colorTheme[type][key] = color;
      }
    },
  },
});

export default companySlice.reducer;
export const companyActions = companySlice.actions;
