import React, {useState,useEffect,lazy} from "react";
import { useSelector } from "react-redux";
import {MdListAlt} from "react-icons/md";
import { getDataAll } from "../../../../api/api";
import { getInterviewers } from "../../../../constant/apiUrl";
import DashboardHeader from "../../common/DashBoardHeader/DashBoardHeader";
const StudentCardList = lazy(() => import("../../../common/Cards/ProfileCard/StudentCardList"));


function InterviewerList(){
    const {isLoggedIn} = useSelector((state) => state.auth);
    let [interviewers, setInterviewer] = useState([]);
    let [interviewerList, setInterviewerList] = useState([]);

    useEffect(()=>{
        (async() =>{
            let response = await getDataAll(getInterviewers);
            if(response.res.data){
                let data= response.res.data;
                setInterviewer(data); 
                setInterviewerList(data)      
            } 
        })();
        return() =>{

        };
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    },[isLoggedIn]);
    
    const onSearch = (value) => {
        let filtered = interviewers.filter(
          (val) =>
            val.name.toLocaleLowerCase().includes(value) ||
            val.degree.toLocaleLowerCase().includes(value) ||
            val.company.toLocaleLowerCase().includes(value) ||
            val.skills.includes(value)
        );
    
        setInterviewerList(filtered);
    };

    return(
        <div className="studentListContainer">
            <DashboardHeader
                title={"Interviewer List"}
                icon={<MdListAlt class= "text-rose-300 text-2xl mt-1"/>}
                onSearch={onSearch}
            />
            <hr class="border-1 border-gray-300  mt-20"></hr>
            <section class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-4 py-12 ml-48">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
                    {interviewerList.map((interviewer, index) => (
                            <section key={index}>
                                {!interviewer.listed ? (
                                    <StudentCardList
                                        student={interviewer}
                                        profileOwner = "Interviewer"
                                    />
                                 ) : (<></>)
                                }
                            </section>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default InterviewerList;


