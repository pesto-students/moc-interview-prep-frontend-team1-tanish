import React, { Suspense } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes/Routes.js";
import * as Sentry from "@sentry/react";
import { fallback } from "./constant/navList";
import './App.css';


function App() {
  return (
  
    <div className="App">
      <Router >    
        <Suspense fallback={fallback}>
            <Routes /> 
        </Suspense>    
      </Router>
    </div>
  );
}
export default Sentry.withProfiler(App);
