import { createSlice } from '@reduxjs/toolkit';

const loggedInUser = {
  user: null,
  portals: [],
  dashboardWidgets: [],
  permissions: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: loggedInUser,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
      state.portals = [];
      state.dashboardWidgets = [];
      state.permissions = [];
    },
    getRoles(state, action) {
      state.portals = action.payload;
    },
    getDashboardWidget(state, action) {
      state.dashboardWidgets = action.payload;
    },
    getPermissions(state, action) {
      state.permissions = action.payload;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
