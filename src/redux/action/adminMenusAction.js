import {UPDATE_STATE} from "../actionType";
import axios from "axios";
import {PATH_NAME} from "../../tools/constant";
import {toast} from "react-toastify";

export function updateState(data){
 return {
     type:UPDATE_STATE,
     payload:data
 }
}
export function setMenus(data){
    return function (dispatch) {
        axios.post(PATH_NAME+'menu',data)
            .then((res)=>{
               if(res.data.success){
                   dispatch(getMenus());
                   toast.success("Muvaffaqqiyatli qo'shildi");
                   dispatch({
                       type:UPDATE_STATE,
                       payload:{
                           openModal:false
                       }
                   })
               }
               else{
                   toast.error('Xatolik')
               }
            })
    }
}
export function getMenus(data) {
    return function (dispatch) {
        axios.get(PATH_NAME+'menu')
            .then((res)=>{
                dispatch({
                    type:UPDATE_STATE,
                    payload:{
                        menus: res.data.data
                    }
                })
            })
    }
}