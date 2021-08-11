import React from 'react';
import TaskList from "./taskList";
import {connect} from "react-redux";
import {useState} from "react";

function AddTask(props) {
   const [inputValue,setInputValue]=useState('');
   function changeInput(event) {
       setInputValue(event.target.value)
   };
   function addTask() {
      if (inputValue.trim().length>0){
          props.addTodo(inputValue);
          setInputValue('')
      }
   }
    return (
        <div className={'card'}>
            <div className={'card-header d-flex'}>
                <input value={inputValue} onChange={changeInput} type={'text'} className={'form-control'}/>
                <button onClick={addTask} className={'btn btn-dark btn-sm'}>Add</button>
            </div>
            <div className={'card-body'}>
                <TaskList/>
            </div>
        </div>
    );
}
function getDispatch(dispatch) {
    return {
        addTodo:(todoValue)=>{
            dispatch({type:"ADD_TASK",payload:todoValue})
        }
    }
}
const a=connect(null,getDispatch);
export default a(AddTask);