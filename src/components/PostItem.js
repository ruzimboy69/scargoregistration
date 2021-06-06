import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostItem extends Component {
    render() {
        return (
            <div className={'card'}>
                <div className={'card-body'}>
                    {this.props.title}
                    <Link to={'Posts/'+this.props.id}>..more</Link>
                </div>
            </div>
        );
    }
}

export default PostItem;