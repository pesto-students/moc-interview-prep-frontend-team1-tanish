import React, { lazy } from "react";



const Introduction = lazy(() => import("./Introduction/Introduction"));
const Footer = lazy(() => import("../common/Footer/Footer"));
const Analytics = lazy(() => import("../Landing/Analytics/Analytics"));
const Interviewer = lazy(() =>import("../Landing/Interviewer/Interviewer"));
const Testimonial= lazy(() =>import("../Landing/Testimonial/Testimonial"));
function Landing() {

    return (
        <div id="landing-page">
          <Introduction />
          <Analytics/>
          <Interviewer/>
          <Testimonial/>
          <Footer/>
        </div>
    );
};

export default Landing;