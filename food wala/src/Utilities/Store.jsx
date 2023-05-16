import {configureStore} from '@reduxjs/toolkit'
import  reducer  from './CartSlice';

const store = configureStore({
reducer : {
    cart : reducer
}
})

export default store;