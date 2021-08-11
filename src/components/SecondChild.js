import React from 'react';
import ThirdChild from "./ThirdChild";

function SecondChild(props) {
    return (
        <div>
            <h1>Second child</h1>
            <ThirdChild/>
        </div>
    );
}

export default SecondChild;