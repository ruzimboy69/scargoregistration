import React from 'react';
import {useEffect,useState} from "react";

function MyModal(props) {

    const [time,setTime]=useState(0)
    useEffect(()=>{
     let a=setInterval(()=>{
            setTime(time=>time+1);
            console.log(time);
        },1000)
        // returndagi funksiya component willUnmountni ornida yani biror hodisa ochirilgandan keyin hodisa toxtaydi
        return ()=>{
            clearInterval(a);
            console.log('willUnmount worked ')
        }
    },[]);
    return (
        <div>
            <div className={'col-md-4'}>
                <div className={'card'}>
                    <div className={'card-header'}>
                        <h4>{time}</h4>
                        jmlvj mejlfvml mv l melfvm lefmv  mkfemlv
                    </div>
                    <div className={'card-body'}>
                        <button onClick={()=>props.close(false)} className={'btn btn-primary'}>close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyModal;