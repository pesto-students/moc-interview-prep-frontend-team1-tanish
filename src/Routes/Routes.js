import React, { lazy} from "react";
import {useSelector} from "react-redux";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Landing = lazy(() => import("../component/Landing/Landing"));
const About = lazy(() => import("../component/About/About"));
const Contact = lazy(() => import("../component/Contact/Contact"));
const SignUp = lazy(() =>import("../component/Join/SignUp/SignUp"));
const SignIn = lazy(() =>import("../component/Join/SignIn/SignIn"));
const InterviewerDashboard = lazy(() =>import("../component/Dashboard/Interviewer/Interviewer"));
const StudentDashboard = lazy(() =>import("../component/Dashboard/Student/Student"));
const DummyLogIn = lazy (() => import("../component/Join/DummyLogIn/DummyLogin"));
function Routes() {

    const { isLoggedIn } = useSelector((state) => state.auth);
    return(
        <div>
             <PublicRoute  path="/" element={<Landing/>} />
             <PublicRoute  path="/about" element={<About/>} />
             <PublicRoute  path="/contact" element={<Contact/>} />
             <PublicRoute  path="/signup" element={<SignUp/>} />
             <PublicRoute  path="/signin" element={<SignIn/>} />
             <PublicRoute  path="/resources" element={<About/>} />
             <PrivateRoute path="/Interviewer*" element={<InterviewerDashboard/>} loggedIn={isLoggedIn}/>
             <PrivateRoute path="/Student*" element={<StudentDashboard/>} loggedIn={isLoggedIn}/>
             <PublicRoute  path="/dummylogin" element={<DummyLogIn/>} />
        </div>
    );
}

export default Routes