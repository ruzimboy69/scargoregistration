import React, {Component} from 'react';
import axios from "axios";
import PostItem from "./PostItem";

class Posts extends Component {
    state={
        posts:[]
    };
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                this.setState({
                    posts:res.data
                })
            })
    }

    render() {
        const {posts}=this.state;
        return (
            <div>
                <div className={'container'}>
                    <div className={'row'}>
                        {posts.map((item,index)=>(
                            <div className={'col-md-4 my-2'} key={index}>
                                <PostItem title={item.title} id={item.id}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;