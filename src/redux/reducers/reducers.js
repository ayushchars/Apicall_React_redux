import { combineReducers } from "redux";
import {reducer} from "./reducer";
import {productDetail} from "./reducer";
import {IcrementReducer} from "./reducer";

const reducers = combineReducers({
    allproduct : reducer,
    productdetail : productDetail,
    addCart : IcrementReducer,          
})

export default reducers;