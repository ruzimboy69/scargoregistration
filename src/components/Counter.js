import React from 'react';
import {useState,useEffect} from "react";
import axios from "axios";

function Counter(props) {
    const [count,setCount]=useState(0);
    const [users,setUsers]=useState({
        firstName:'Ali',
        lastName:'Valiev'
    });
    const [active,setActive]=useState(false);
    const [posts,setPosts]=useState([])
    function addCount(){
        setCount(count+1)
    };
    function changeName(){
        users.firstName="roy";
        let a={...users};
        setUsers(a)
        console.log(users)
    }
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setPosts(posts=>res.data)
            // tepadagi post=>res.data - res.data bilan bir xil
        })
    },[]);
    return (
        <div>
            <div className={'container'}>
                <div className={'row my-5'}>
                    <div className={'col-md-4'}>
                        <div className={'card'}>
                            <div className={'card-body text-center'}>
                              <h4>{count}</h4>
                                <button onClick={addCount} type={'button'} className={'btn btn-success'}>
                                    add count
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <div className={'card'}>
                            <div className={'card-header text-center'}>
                               <h4>{users.firstName} {users.lastName}</h4>
                            </div>
                            <div className={'card-body'}>
                                <button onClick={changeName} className={'btn btn-primary'}>
                                    change name
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-4'}>
                        <div className={'card'}>
                            <div className={'card-header text-center'}>
                                <h4>{active ? "active" :" disactiive" }</h4>
                            </div>
                            <div className={'card-body'}>
                                <button onClick={()=>setActive(!active)} className={'btn btn-info'}>change active</button>
                            </div>
                        </div>
                    </div>
                    {posts.map((item,index)=>(
                        <div className={'col-md-4'} key={index}>
                            <div className={"card"}>
                                <div className={'card-header'}>
                                    {item.title}
                                </div>
                                <div className={'card-body'}>
                                    {item.body}
                                </div>
                            </div>
                        </div>
                            ))};
                </div>
            </div>
        </div>
    );
}

export default Counter;