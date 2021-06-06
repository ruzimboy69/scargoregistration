import React, {Component} from 'react';
import axios from "axios";

class PostView extends Component {
    state={
        post:{}
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                this.setState({
                    post:res.data
                })
            })
        console.log(this.props)
    }

    render() {
        const {post}=this.state;
        return (
            <div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <div className={'card'}>
                                <div className={'card-header'}>
                                    <h6>{post.title}</h6>
                                </div>
                                <div className={'card-body'}>
                                    {post.body}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostView;