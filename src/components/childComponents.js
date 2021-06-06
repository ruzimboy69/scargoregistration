
import React, {useState} from 'react';

function ChildComponents(props) {
    return (
        <div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <h1>Yurdi:</h1>
                        <button>+</button>
                        <h1>Qadam:</h1>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChildComponents;