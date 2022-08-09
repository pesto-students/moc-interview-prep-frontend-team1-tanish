import React from 'react';
import { Routes, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component,...rest }) => 
(  
    
    <Routes>
    <Route {...rest} render={props => <Component {...props} />} />
    </Routes>
   
)


export default PublicRoute;