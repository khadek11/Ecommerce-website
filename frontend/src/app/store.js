import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/user/userSlice'
import productReducer from '../features/products/productSlice'
const  store = configureStore({
    reducer:{
        auth: authReducer,
        product: productReducer,
    }
})
export default store