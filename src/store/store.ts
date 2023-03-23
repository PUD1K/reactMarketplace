import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userDataReducer from './reducers/users/UserDataSlice'
import userReducer from './reducers/users/UserSlice'
import errorsReducer from './reducers/errors/ErrorsSlice'
import componentsReducer from './reducers/components/ComponentsSlice'
import productsReducer from './reducers/products/ProductsSlice'
import basketReducer from './reducers/baskets/BasketSlice'
import checkoutReducer from './reducers/checkout/CheckoutsSlice'


const rootReducer = combineReducers({
    userDataReducer,
    userReducer,
    errorsReducer,
    componentsReducer,
    productsReducer,
    basketReducer,
    checkoutReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
