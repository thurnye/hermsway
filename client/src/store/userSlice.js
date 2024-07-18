import  {createSlice} from '@reduxjs/toolkit'


const loggedInUser = {
    user: null,
    portals: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState: loggedInUser,
    reducers: {
       login(state, action){
           state.user = action.payload.user;
       },
       getRoles(state, action){
           state.portals = action.payload;
       },
       logout(state){
           state.user = null
       } 
    }
})

export default userSlice.reducer;
export const userActions = userSlice.actions