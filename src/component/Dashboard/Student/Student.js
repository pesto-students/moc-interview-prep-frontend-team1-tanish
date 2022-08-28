import React, { lazy} from "react";
import {Navigate,Route,Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import StudentNav from  "../../common/SideNav/StudentNav";
import Dashboard from "../Student/dashboard/dashboard";
import UpcomingInterviews from "./UpcomingInterviews/UpcomingInterviews";
import InterviewerList from "../Interviewer/List/InterviewerList";
import BookInterviews from "./Calendly/Calendly";

const Studentprofile = lazy (() => import("../Student/Profile/StudentProfile"));
const Interviewerprofile = lazy(() =>import("../Interviewer/Profile/InterviewerProfile"));


function Student (){
    const { isLoggedIn} = useSelector((state) => state.auth);
    
    if (!isLoggedIn) {
        return <Navigate to= "/signin"/>;
    }
    return (
        <div>
            <StudentNav/>
            <Routes>
                <Route  path="/" element={<Dashboard/>} />
                <Route  path="/dashboard" element={<Dashboard/>} />
                <Route  path="/upcoming" element={<UpcomingInterviews/>} />
                <Route  path="/interviewerlist" element={<InterviewerList/>} />
                <Route path= {`/interviewerprofile/:profileId`}  element={<Interviewerprofile/>}></Route> 
                <Route path= {`/studentprofile/:profileId`}  element={<Studentprofile/>}></Route>
                <Route path= {`/bookinterview/:profileId`}  element={<BookInterviews/>}></Route>
            </Routes>
        </div>
    )
}

export default Student;