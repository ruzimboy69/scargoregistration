import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import {logger} from "redux-logger/src";
import taskReducer from "./reducer/taskReducer";

const store=createStore(combineReducers({reducer,productReducer,taskReducer}),applyMiddleware(logger));
export default store;