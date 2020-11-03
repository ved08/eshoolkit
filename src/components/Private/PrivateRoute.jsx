import React from 'react';
import { Route, Redirect } from "react-router-dom"

import Auth from "../../auth";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={props => 
            Auth.getAuthStatus() ? 
                <Component {...props}/> :
                <Redirect to="/"/>
        }/>
    );
}

export default PrivateRoute