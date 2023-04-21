import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userDataReducer from './reducers/users/UserDataSlice'
import userReducer from './reducers/users/UserSlice'
import errorsReducer from './reducers/errors/ErrorsSlice'
import componentsReducer from './reducers/components/ComponentsSlice'
import productReducer from './reducers/products/ProductSlice'
import productsReducer from './reducers/products/ProductsSlice'
import ratingReducer from './reducers/products/RatingSlice'
import basketReducer from './reducers/baskets/BasketSlice'
import pagePropertyReducer from './reducers/pageProperty/PagePropertySlice'
import checkoutReducer from './reducers/checkout/CheckoutsSlice'
import imageReducer from './reducers/other/ImageSlice'
import shopDataReducer from './reducers/shop/ShopDataSlice'



const rootReducer = combineReducers({
    userDataReducer,
    userReducer,
    errorsReducer,
    componentsReducer,
    productReducer,
    basketReducer,
    checkoutReducer,
    ratingReducer,
    productsReducer,
    pagePropertyReducer,
    imageReducer,
    shopDataReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
