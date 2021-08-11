import React from 'react';
import {connect} from "react-redux";

function TaskList(props) {
    function deleteTask(index) {
        props.clean(index)
    }
    return (
        <div>
            {props.tasks.map((item,index)=>(
                <div key={item.id} className={'d-flex w-100 justify-content-between align-items-center mt-3'}>
                    <h6>{item.title}</h6>
                    <button onClick={()=>deleteTask(index)} type={'button'} className={'btn btn-danger btn-sm'}>Delete</button>
                </div>
            ))}
        </div>
    );
}
function getState(state){
    return {
        tasks:state.taskReducer.tasks
    }
}
function getDispatch(dispatch) {
    return {
        clean:(deleteIndex)=>{
            dispatch({type:"DELETE_TASK",payload:deleteIndex})
        }
    }
}
const a=connect(getState,getDispatch);
export default a(TaskList);