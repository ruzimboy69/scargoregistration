import React, {useState} from 'react';
import {useEffect} from "react";
import axios from "axios";

function MyFilteredUsers(props) {
    const [users,setUsers]=useState([]);
    const [data,setFilteredData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                setUsers(res.data);
                setFilteredData(res.data);
            })
    },[]);
    function selectedUser(event){
        const selectUser=event.target.value;
        const filter=data.filter(item=>(item.id==selectUser) ||selectUser==='')
        setUsers(filter);
    }
    return (
        <div>
            <div className={'container'}>
                <div className={'row my-5'}>
                    <div className={'col-md-4'}>
                        <select onChange={selectedUser} className={'form-control'}>
                            <option value="">All</option>
                            {data.map((item)=>(
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={"row my-5"}>
                    {users.map((item)=>(
                        <div className={"col-md-4 my-3"} key={item.id}>
                            <div className={"card"}>
                                <div className={'card-header text-center'}>
                                    <h4>{item.name}</h4>
                                </div>
                                <div className={'card-body'}>
                                    <h6>{item.email}</h6>
                                    <h6>{item.address.city}</h6>
                                    <h6>{item.website}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyFilteredUsers;