import React, { lazy} from "react";

const Header = lazy(() => import("../../../common/Header/Header"));
const Footer = lazy(() => import("../../../common/Footer/Footer"));


function  InterviewerDashboard (){
    return (
        <div className="interviewerDashboard">
         <Header></Header>
         <Footer></Footer>
        </div>
    )
}


export default  InterviewerDashboard;