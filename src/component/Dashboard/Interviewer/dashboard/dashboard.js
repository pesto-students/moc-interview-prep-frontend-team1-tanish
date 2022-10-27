import React, { lazy,useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { MdDashboard} from "react-icons/md";


const DashboardHeader = lazy(() => import("../../common/DashBoardHeader/DashBoardHeader"));
const DashBoardCards  = lazy (() => import("../dashboard/Cards/DashBoardCards"));
const Interviews = lazy (() => import("../dashboard/Interviews/Interviews"));


function  InterviewerDashboard (){
    const {user:currentUser,isLoggedIn} = useSelector((state) => state.auth);
    let [interviewer, setInterviewer] = useState([]);
    console.log(currentUser.analytics);

    useEffect(() => {
          if(isLoggedIn){
            console.log(currentUser.analytics);
            setInterviewer(currentUser);     
          }
        // eslint-disable-next-line react-hooks/exhaustive-deps  
      }, [isLoggedIn]);

    return (
        <div className="interviewerDashboard">
         <DashboardHeader title="Interviewer Dashboard" icon={<MdDashboard class= "text-rose-300 text-2xl"/>}/>
         <hr class="border-1 border-gray-300  mt-20"></hr>
         <DashBoardCards  data={interviewer.analytics} />
         <Interviews/>
        </div>
    )
}


export default  InterviewerDashboard;