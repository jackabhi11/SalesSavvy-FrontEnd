import {configureStore} from "@reduxjs/toolkit"
import categoryReducer from './features/categoriesSlice'
import productReducer from './features/productSlice'

export const store = configureStore ({
    reducer: {
        category: categoryReducer,
        product: productReducer
    }
})