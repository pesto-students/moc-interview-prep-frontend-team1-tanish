import React, { lazy,useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { MdDashboard} from "react-icons/md";

const DashboardHeader = lazy(() => import("../../common/DashBoardHeader/DashBoardHeader"));
const DashBoardCards  = lazy (() => import("../dashboard/Cards/DashBoardCards.js"));
const Interviews = lazy (() =>import("../dashboard/Interviews/Interviews"));

function  StudentDashboard (){
    const {user:currentUser,isLoggedIn} = useSelector((state) => state.auth);
    let [student, setStudent] = useState([]);
    //console.log(currentUser.analytics);

    useEffect(() => {
          if(isLoggedIn){
            console.log(currentUser.analytics);
            setStudent(currentUser);     
          }
        // eslint-disable-next-line react-hooks/exhaustive-deps  
      }, [isLoggedIn]);
    return (
        <div className="studentDashboard">
            <DashboardHeader title="Student Dashboard" icon={<MdDashboard class= "text-rose-300 text-2xl"/>}/>
            <hr class="border-1 border-gray-300  mt-20"></hr>
            <DashBoardCards  data={student.analytics} />
            <Interviews />
        </div>
    )
}


export default  StudentDashboard;