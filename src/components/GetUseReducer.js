import React, {useState} from 'react';
import {useReducer,useRef} from "react";
import {AvForm,AvField} from "availity-reactstrap-validation";
import {Table} from "reactstrap";

function GetUseReducer(props) {
    const myRef=useRef();
    const [count,setCount]=useState(0);
    const [state,dispatch]=useReducer(reducer,{
        count:0,
        age:25,
        name:"Asilbek",
        numbers:[1,2,34,5],
        isOpen:false,
        users:[]
    });
    function reducer(state,action){
       switch (action.type){
           case "ADD_COUNT":
              if(state.count<10){
                  state={
                      ...state,
                      count:state.count+1
                  }
              }
               break;
           case "CHANGE_NAME" :
               state={
                   ...state,
                   name:"Ruzimboy"
               }
               break;
           case "ADD_AGE" :
               state={
                   ...state,
                   age:state.age+2
               }
               break;
           case "CLOSE_MODAL" :
               state={
                   ...state,
                   isOpen:false
               }
               break;
           case "OPEN_MODAL" :
               state={
                   ...state,
                   isOpen: true
               }
               break;
           case "ADD_POSITION" :
               state={
                   ...state
               }
               break;
       }

       console.log(state);
       console.log(action);
        return state
    }
    function addCount() {
       // setCount(prev=>prev+1);
       //  setCount(prev=>prev+1);
       //  setCount(prev=>prev+1);
        dispatch({type:"ADD_COUNT"})

    }
    function changeName(){
        dispatch({type:"CHANGE_NAME"})
    };
    function addAge() {
        dispatch({type:"ADD_AGE"})
    };
    function closeModal() {
        dispatch({type:"CLOSE_MODAL"})
    }
    function openModal() {
        dispatch({type:"OPEN_MODAL"})
    }
    function addPosition(event,value) {
        state.users.push(value);
        dispatch({type:"ADD_POSITION"});
        myRef.current.reset();

    }
    return (
        <div className={"container my-5 "}>
            <button onClick={openModal}>Add+</button>
            <div className={'row my-5'}>
                <div className={"col-md-8"}>
                    <table className={'table table-dark table-bordered'}>
                        <thead>
                        <tr>
                            <th>Tr</th>
                            <th>Nomi</th>
                            <th>Maoshi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {state.users.map((item,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className={'col-md-4'}>
                    {state.isOpen ?
                        <div className={'card'}>
                            <div className={'card-header'}>
                                Lavozim qoshish
                            </div>
                            <div className={"card-body"}>
                                <AvForm ref={myRef} onValidSubmit={addPosition}>
                                    <AvField
                                        type={'text'}
                                        name={"name"}
                                        label={"Nomini kiriting"}
                                        placeholder={"developer"}
                                        required
                                    />
                                    <AvField
                                        type={'number'}
                                        name={"salary"}
                                        label={"Maoshni kiriting"}
                                        placeholder={"2000$"}
                                        required
                                    />
                                    <button onClick={closeModal} type={'button'} className={'btn btn-primary'}>Chiqish</button>
                                    <button  type={'submit'} className={'btn btn-info'}>Saqlash</button>

                                </AvForm>
                            </div>
                        </div>
                        :
                        ""
                    }
                </div>
            </div>
          <div className={'row my-4'}>
              <div className={"col-md-4"}>
                  <h1>{state.count}</h1>
                  <button onClick={addCount}>add Count</button>
              </div>
              <div className={'col-md-4'}>
                  <h1>{state.name}</h1>
                  <button onClick={changeName}>change name</button>
              </div>
              <div className={'col-md-4'}>
                  <h1>{state.age}</h1>
                  <button onClick={addAge}>add Age</button>
              </div>
          </div>
        </div>
    );
}

export default GetUseReducer;