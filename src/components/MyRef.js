import React from 'react';
import {useRef} from "react";

function MyRef(props) {
    const inputRef=useRef();
    function getInputValue() {
        console.log(inputRef.current.value)
    }
    return (
        <div className={'container'}>
            <div className={'row'}>
                <input onChange={getInputValue} ref={inputRef} type="text"/>
            </div>
        </div>
    );
}

export default MyRef;