import React from 'react';
import SecondChild from "./SecondChild";

function FirstChild(props) {
    return (
        <div>
            <h1>First Child</h1>
            <SecondChild/>
        </div>
    );
}

export default FirstChild;