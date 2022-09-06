import React ,{useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getInterviews} from "../../../../../constant/apiUrl";
import { getDataAll } from "../../../../../api/api";
import {BiCalendar} from "react-icons/bi"
import {Link} from "react-router-dom";


function Interviews (){
  let [interviews, setInterviews] = useState([]);
  const {user:currentUser,isLoggedIn} = useSelector((state) => state.auth);

  useEffect(()=>{
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
  },[isLoggedIn]);
  interviews = interviews.filter((e) => e.status !== "completed");

    return (
        <section className="interview-details-dashboard1 ml-56 mt-16 flex  justify-evenly">
          <section id="upcomingInterviews1" className="block p-4  bg-white  border  shadow-md hover:bg-rose-50 shadow-slate-300 h-48 overflow-y-auto">
            <div className="upcomingInterviews1_header flex space-x-48 justify-evenly justify-items-stretch py-3"> 
                <p className="text-rose-300 text-xl tittle-font ">Upcoming Interviews</p>          
                  <button type="primary" className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600">
                    <Link to='../upcoming'>View All</Link>
                  </button>  
            </div>
            {interviews.length > 0 ? (
            <section id="upcomingList1">
              {interviews.map((e, index) => (
                <section key={index} id="interviewInfo1" className="flex text-sm justify-evenly py-3.5 block bg-white border rounded-lg shadow-md hover:bg-rose-50 shadow-slate-300 mt-2">
                  <span id="date" className="flex justify-evenly">
                    <i className="calender py-1.5 px-1.5"><BiCalendar/></i>
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
          <section id="studentQuery" className="block p-4  bg-white  border  shadow-md hover:bg-rose-50 shadow-slate-300">
            <div className="upcomingInterviews1_header flex space-x-48 justify-evenly justify-items-stretch py-3">
                <p className="text-rose-300 text-xl tittle-font ">Student Queries</p>          
                 <button type="primary" className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600 h-8 ">
                    <Link to='../upcoming'>View All</Link>
                </button>  
            </div>
            <section className="stQueryDashboard flex text-sm justify-evenly py-3.5 block bg-white border rounded-lg shadow-md hover:bg-rose-50 shadow-slate-300">
                <p>Interview Reschedule</p>
                <p>Yasmeine Lemoine</p>
                <Link to="../queries" className="text-rose-300">Respond</Link>
            </section>
          </section> 
        </section>
    )
};

export default Interviews;