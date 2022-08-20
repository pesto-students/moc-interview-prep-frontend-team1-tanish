import React, { lazy} from "react";
import PublicRoute from "./PublicRoute";



const Landing = lazy(() => import("../component/Landing/Landing"));
const About = lazy(() => import("../component/About/About"));
const Contact = lazy(() => import("../component/Contact/Contact"));
const SignUp = lazy(() =>import("../component/Join/SignUp/SignUp"));
const SignIn = lazy(() =>import("../component/Join/SignIn/SignIn"));

function Routes() {
    return(
        <div>
             <PublicRoute exact path="/" element={<Landing/>} />
             <PublicRoute exact path="/about" element={<About/>} />
             <PublicRoute exact path="/contact" element={<Contact/>} />
             <PublicRoute exact path="/signup" element={<SignUp/>} />
             <PublicRoute exact path="/signin" element={<SignIn/>} />
        </div>
    );
}

export default Routes