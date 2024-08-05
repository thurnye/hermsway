import  {createSlice} from '@reduxjs/toolkit'


const initial = {
    company: null,
}

const companySlice = createSlice({
    name: 'company',
    initialState: initial,
    reducers: {
       
       getCompany(state, action){
        console.log(action.payload)
           state.company = action.payload;
       },
    }
})

export default companySlice.reducer;
export const companyActions = companySlice.actions