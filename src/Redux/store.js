import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./Authentication/reducer";
import {reducer as productReducer} from "./ProductReducer/reducer";
import {reducer as cartReducer} from "./Cart/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    authReducer,
    productReducer,
    cartReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))