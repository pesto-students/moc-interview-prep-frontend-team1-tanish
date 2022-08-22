import React, { lazy} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Dashboard = lazy(() => import("../Interviewer/dashboard/dashboard"));

function Interviewer (){
    const { isLoggedIn} = useSelector((state) => state.auth);
    if (!isLoggedIn) {
        return <Navigate to= "/signin"/>;
    }
    return (
        <div class="interviewer">
        <Dashboard/>    
        </div>

    )
}

export default Interviewer;