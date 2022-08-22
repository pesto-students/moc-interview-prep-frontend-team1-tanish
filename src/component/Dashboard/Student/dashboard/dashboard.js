import React, { lazy} from "react";

const Header = lazy(() => import("../../../common/Header/Header"));
const Footer = lazy(() => import("../../../common/Footer/Footer"));


function  StudentDashboard (){
    return (
        <div className="studentDashboard">
         <Header></Header>
         <Footer></Footer>
        </div>
    )
}


export default  StudentDashboard;