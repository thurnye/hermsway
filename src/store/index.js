import  { configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import companyReducer from './companySlice'




const store = configureStore({
    reducer: {
        userLog: userReducer,
        company: companyReducer
    }
})



export default store;