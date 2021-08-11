import React from 'react';
import {MyContext} from '../App';
import {useContext} from "react";

function ThirdChild(props) {
    const text=useContext(MyContext);
    return (
        <div>
            <h1>{text.firstName}</h1>
            <h1>{text.lastName}</h1>
        </div>
    );
}

export default ThirdChild;