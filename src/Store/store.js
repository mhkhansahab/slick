import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productsReducer from "./reducer/products";
import bannersReducer from "./reducer/banners";
import categoriesReducer from "./reducer/categories";
import modalReducer from "./reducer/modal";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    products : productsReducer,
    banners : bannersReducer,
    categories : categoriesReducer,
    modal : modalReducer
})

export default configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


