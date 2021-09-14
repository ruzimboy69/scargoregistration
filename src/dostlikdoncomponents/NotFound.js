import React from 'react';
import {Link} from 'react-router-dom';
function NotFound(props) {
    return (
        <div className={'container'}>
            <div className={'row vh-100 align-items-center'}>
                <div className={'col-md-12 text-center'}>
                    <img src={"images/notfound.png"}/>

                    <h4><Link className={"text-decoration-none text-dark"} to={"/"}>Bosh sahifaga o'tish</Link>
                    </h4>
                </div>
            </div>

        </div>
    );
}

export default NotFound;