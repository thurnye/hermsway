import { createSlice } from '@reduxjs/toolkit';

const initial = {
  companyProfile: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState: initial,
  reducers: {
    getCompany(state, action) {
      state.companyProfile = action.payload;
    },
  },
});

export default companySlice.reducer;
export const companyActions = companySlice.actions;
