import axios from "axios";
import {PATH_NAME, TOKEN_NAME} from "../../tools/constant";
import {toast} from "react-toastify";

export function loginUser(data,history) {
    return function ( dispatch){
dispatch({
        type:"LOGIN"
});
        axios.post(PATH_NAME+'auth/login',data)
            .then((res)=>{
                localStorage.setItem(TOKEN_NAME,res.data.tokenType+ ""+res.data.accessToken)
                toast.success('siz muvaffaqiyatli royxatdan otdingiz');
                history.push('/admin')
                dispatch({type:"LOGIN"})
            })
            .catch((error)=>{
                console.log(error)
                toast.error('xatolik yuz berdi');
                dispatch({type:"LOGIN"})

            });
    }
}