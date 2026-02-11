import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from './features/categoriesSlice'
import productReducer from './features/productSlice'
import userReducer from './features/userSlice'

export const store = configureStore ({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        user:userReducer
    }
})