import React, { lazy,useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { MdAddAlert} from "react-icons/md";
import {getInterviews} from "../../../../constant/apiUrl";
import { getDataAll } from "../../../../api/api";
import {BiCalendar} from "react-icons/bi"



const DashboardHeader = lazy(() => import("../../common/DashBoardHeader/DashBoardHeader"));


function UpcomingInterviews() {
    let [interviews, setInterviews] = useState([]);
    const {user:currentUser,isLoggedIn} = useSelector((state) => state.auth);

    useEffect(()=> {
      (async() =>{
        let response = await getDataAll(getInterviews);
        if(response.res.data){
        let data= response.res.data;
            setInterviews(
            data.filter((e) => e.interviewer.id === currentUser._id)
            );
        } 
      })();
        return() =>{

        }; 
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[isLoggedIn])
    interviews = interviews.filter((e) => e.status !== "completed");

     return(
        <section id="upcoming-interviews-dashboard ">
            <DashboardHeader title="Upcoming Interviews" icon={<MdAddAlert class= "text-rose-300 text-2xl"/>}/>
            <hr class="border-1 border-gray-300  mt-20"></hr>
            {interviews.length > 0 ? (
            <section id="upcomingList1 " className="ml-72 mt-8">
              {interviews.map((e, index) => (
                <section key={index} id="interviewInfo1" className="flex text-sm justify-evenly py-3.5 block bg-white border rounded-lg shadow-md hover:bg-rose-50 shadow-slate-300 w-2/3">
                  <span id="date" className="flex justify-evenly">
                    <i className="calender py-1.5 px-3.5"><BiCalendar/></i>
                    <p>{e.date}</p>
                  </span>
                  <p>{e.time} </p>
                  <p>{e.student.name}</p>

                  <span>
                    <p>{e.topic}</p>
                  </span>
                  <span>
                    <a className="text-rose-300" href={e.meetingUrl} target="_blank" rel="noreferrer">
                      Join Meets
                    </a>
                  </span>
                </section>
              ))}
            </section>
            ) : (
            <></>
            )}
        </section>
     )
};

export default UpcomingInterviews;