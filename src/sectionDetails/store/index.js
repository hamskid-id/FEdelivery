import { configureStore } from "@reduxjs/toolkit";
import auth_Slice,{loadUser} from "./authSlice";
import cart_Slice from './cartslice';
import product_Slice, { drinksFetch,fisrtSectionImgApiFetch, fruitFetch, chickenFetch, fishFetch, icecreamFetch, adminProductsFetch} from "./productSlice";



const store = configureStore({
    reducer:{
        cart: cart_Slice.reducer,
        product: product_Slice.reducer,
        auth: auth_Slice.reducer,
    },
})

store.dispatch(drinksFetch());
store.dispatch(adminProductsFetch())
store.dispatch(fisrtSectionImgApiFetch())
store.dispatch(fruitFetch());
store.dispatch(chickenFetch());
store.dispatch(fishFetch());
store.dispatch(icecreamFetch());
store.dispatch(loadUser(null));
export default store;