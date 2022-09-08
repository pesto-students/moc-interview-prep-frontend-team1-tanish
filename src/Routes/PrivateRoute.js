import React from 'react';
import { Route, Navigate,Routes } from 'react-router-dom';


const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
    
    
    <Routes>
        <Route {...rest} render={props => ( loggedIn ? <Component {...props} />  : <Navigate  to = "/signin" replace/>)}/>  
    </Routes>         
)

export default PrivateRoute;