import React, { lazy} from "react";
import PublicRoute from "./PublicRoute";



const Landing = lazy(() => import("../component/Landing/Landing"));

function Routes() {
    return(
        <div>
             <PublicRoute exact path="/" element={<Landing/>} />
        </div>
    );
}

export default Routes