import {combineReducers} from "redux";
import {loginReducers} from "./loginReducer";
import {adminMenusReducer} from "./adminMenusReducer";

 export const rootReducers=combineReducers({
     login:loginReducers,
     menu:adminMenusReducer
});