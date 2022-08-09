import React, { lazy } from "react";


const Introduction = lazy(() => import("./Introduction/Introduction"));
const Footer = lazy(() => import("../common/Footer/Footer"));

function Landing() {

    return (
        <div id="landing-page">
          <Introduction />
          <Footer/>
        </div>
    );
};

export default Landing;