import React, {useState} from 'react';
import {useEffect} from "react";
import axios from "axios";

function FilterEmploye(props) {
    const [staff,setStaff]=useState([]);
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://nimadir.herokuapp.com/api/employee")
            .then((res)=>{
                setStaff(res.data.object);
                setData(res.data.object);
                console.log(res)
            })
    },[]);
    function selectedUser(event){
        const selectUser=event.target.value;
        const filter=data.filter(item=>(item.id==selectUser) ||selectUser==='')
        setStaff(filter);
    }
    return (
        <div>
            <div className={'container'}>
                <div className={'row my-5'}>
                    <div className={'col-md-4'}>
                        <select onChange={selectedUser} className={'form-control'}>
                            <option value="">All</option>
                            {data.map((item)=>(
                                <option key={item.id} value={item.id}>{item.firstName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={"row my-5"}>
                    {staff.map((item)=>(
                        <div className={"col-md-4 my-3"} key={item.id}>
                            <div className={"card"}>
                                <div className={'card-header text-center'}>
                                    <h4>{item.firstName}</h4>
                                </div>
                                <div className={'card-body'}>
                                    <h6>{item.age}</h6>
                                    <h6>{item.position}</h6>
                                    <h6>{item.salary}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterEmploye;