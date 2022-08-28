import React,{lazy} from "react";
import {Navigate,Route,Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import Dashboard from "../Interviewer/dashboard/dashboard";
import InterviewerNav from  "../../common/SideNav/InterviewerNav";
import UpcomingInterviews from "./UpcomingInterviews/UpcomingInterviews";
import StudentList from "../Student/List/StudentList";


const Interviewerprofile = lazy(() =>import("./Profile/InterviewerProfile"));
const Studentprofile = lazy (() => import("../Student/Profile/StudentProfile"));

function Interviewer (){
    const { isLoggedIn} = useSelector((state) => state.auth);
    if (!isLoggedIn) {
        return <Navigate to= "/signin"/>;
    }
    return (
        <div>
        <InterviewerNav/>
        <Routes>
            <Route  path="/" element={<Dashboard/>} />
            <Route  path="/dashboard" element={<Dashboard/>} />
            <Route  path="/upcoming" element={<UpcomingInterviews/>} />
            <Route  path="/studentlist" element={<StudentList/>} />
            <Route path= {`/interviewerprofile/:profileId`}  element={<Interviewerprofile/>}></Route>
            <Route path= {`/studentprofile/:profileId`}  element={<Studentprofile/>}></Route>
        </Routes>
        </div>
    )
}

export default Interviewer;