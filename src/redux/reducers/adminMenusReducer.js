import {UPDATE_STATE} from "../actionType";

const initialState={
    openModal:false,
    openSubMenu:false,
    generateUrl:'',
    menus:[]
};
export const adminMenusReducer=(state=initialState,action)=>{
    switch (action.type) {
        case UPDATE_STATE :
            state={
                ...state,
                ...action.payload
            };
            break;
    }
    return state;
}