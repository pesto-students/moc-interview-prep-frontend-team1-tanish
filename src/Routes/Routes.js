import React, { lazy} from "react";
import PublicRoute from "./PublicRoute";



const Landing = lazy(() => import("../component/Landing/Landing"));
const About = lazy(() => import("../component/About/About"));
const Contact = lazy(() => import("../component/Contact/Contact"));

function Routes() {
    return(
        <div>
             <PublicRoute exact path="/" element={<Landing/>} />
             <PublicRoute exact path="/about" element={<About/>} />
             <PublicRoute exact path="/contact" element={<Contact/>} />
        </div>
    );
}

export default Routes