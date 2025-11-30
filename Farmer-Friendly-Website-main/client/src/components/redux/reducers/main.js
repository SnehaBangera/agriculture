import { getProductsReducers } from "./Productsreducer";
import { cartReducer } from "./CartReducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers,
    cart: cartReducer
});

export default rootreducers;