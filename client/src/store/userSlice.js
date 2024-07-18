import  {createSlice} from '@reduxjs/toolkit'


const loggedInUser = {
    user: null,
    portals: [],
    dashboardWidgets: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: loggedInUser,
    reducers: {
       login(state, action){
           state.user = action.payload.user;
       },
       logout(state){
           state.user = null
       },
       getRoles(state, action){
           state.portals = action.payload;
       },
       getDashboardWidget(state, action){
           state.dashboardWidgets = action.payload;
       },
    }
})

export default userSlice.reducer;
export const userActions = userSlice.actions