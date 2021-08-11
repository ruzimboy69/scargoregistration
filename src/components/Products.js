import React from 'react';
import {connect} from "react-redux";

function Products(props) {
    return (
        <div className={'row my-5'}>
            {props.products.map((item,index)=>(
                <div className={"col-md-3"} key={index}>
                    <div className={'card'}>
                        <div className={'card-header'}>
                            <h4>{item.name}</h4>
                        </div>
                        <div className={'card-body'}>
                            <h6>Price:{item.price}</h6>
                            <h6>Weight:{item.weight}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
function getState(state) {
    return {
        products:state.productReducer.products
    }
}
let a=connect(getState,null);

export default a(Products);