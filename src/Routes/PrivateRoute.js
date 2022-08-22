import React from 'react';
import { Route, Navigate,Routes } from 'react-router-dom';


const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
    
    
    <Routes>
        console.log(loggedIn);
        <Route {...rest} render={props => ( loggedIn ? <Component {...props} />  : <Navigate  to = "/signin" replace/>)}/>  
    </Routes>         
)

// const PrivateRoute = ({ page}) => {
//     let {isLoggedIn} = useSelector((state) => state.auth);
//     console.log(isLoggedIn);
//     return isLoggedIn? page : <Navigate to="/signin" />;
            
// }




export default PrivateRoute;