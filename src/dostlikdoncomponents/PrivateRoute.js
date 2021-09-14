import React from 'react';
import {TOKEN_NAME} from "../tools/constant";
import {Route} from "react-router-dom";
import NotFound from "./NotFound";
function PrivateRoute(props) {
    return (
       localStorage.getItem(TOKEN_NAME) ?
           <Route component={props.component} path={props.path} exact={props.exact}/> :
           <Route component={NotFound}/>
    );
}

export default PrivateRoute;