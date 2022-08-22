import React, { lazy} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Dashboard = lazy(() => import("../Student/dashboard/dashboard"));

function Student (){
    const { isLoggedIn} = useSelector((state) => state.auth);
    if (!isLoggedIn) {
        return <Navigate to= "/signin"/>;
    }
    return (
        <div class="student">
        <Dashboard/>    
        </div>

    )
}

export default Student;