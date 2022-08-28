import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import {getStudentById} from "../../../../constant/apiUrl";
import { getDataAll } from "../../../../api/api";
import DashboardHeader from '../../common/DashBoardHeader/DashBoardHeader';


function Studentprofile (){
    const { profileId } = useParams();
    let [student, setStudent] = useState({});
    let [update, setUpdate] = useState(false);
    const { role} = useSelector((state) => state.auth);

    console.log(getStudentById+profileId);
    useEffect(() =>async()=>{
        let response = await getDataAll(getStudentById+profileId);
        if(response.res.data){
         let data= response.res.data;
         setStudent(data);  
        } 
        console.log(student);
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    },[]);

    const component1 = (
        <button
          className="absolute right-4 m-4 shadow bg-green-300 hover:bg-green-200 focus:shadow-outline focus:outline-none  py-1.5 px-4 rounded"
          onClick={() => {
            setUpdate(false);
          }}
        >
          View Profile
        </button>
      );
    
      const component2 = (
        
        <button
          className="absolute right-4 m-4 shadow bg-rose-300 hover:bg-rose-200 focus:shadow-outline focus:outline-none  py-1.5 px-4 rounded"
          onClick={() => {
            setUpdate(true);
          }}
        >
          Update Details
        </button>
        
      );
      

    return (
        <div className="interviewer-profile">
            <DashboardHeader
                title={"StudentProfile"}
                icon={<CgProfile class= "text-rose-300 text-2xl mt-1"/>}
            />
            <hr class="border-1 border-gray-300  mt-20"></hr>
            <section>
                {role !== "Interviewer" ? 
                    (<> {update ? component1 : component2} </>) : (<></>)
                }
            </section>
            {student ? (
                <div className="int-profile-container ml-72 mt-16 flex text-gray-500 ">
                    <section className="left-profile px-8 py-8 ">
                        <img src={student.image} alt="profile" className="object-center object-cover rounded-full h-28 w-28"/>
                        <p className="my-1.5">{student.name}</p>
                        <p className="my-1.5" style={{ textTransform: "lowercase" }}>
                            {student.email}
                        </p>
                        <p className="my-1.5">
                            {student.degree},{student.company}
                        </p>
                        <p className="my-1.5">
                            {student.experience} years of experience in industry
                        </p>
                        <section className="skill-chips flex justify-start space-x-2 my-2">
                            {student.skills ? 
                            (student.skills.map((skill,index) =>(
                                <section key={index}>
                                    <span class ="pl-2 pr-2 py-1 m-1 text-sm  bg-green-50 text-green-400 border border-green-400">{skill}</span>
                                </section>
                            ))) 
                            :(<></>)} 
                        </section>
                    </section>
                    <section className="right-profile px-8 py-8 w-7/12">
                        <h3 className="interviewerProfileHeading text-align-left font-bold my-1.5">About</h3>
                        <section className="about text-gray-800  ">
                            <p className="break-words my-1.5">{student.about}</p> 
                        </section>
                        <h3 className="interviewerProfileHeading font-bold my-1.5">
                            Interview Topics
                        </h3>
                        <section className="skill-chips flex justify-start space-x-2 my-2">
                            {student.topics ? 
                                (student.topics.map((topic, index) => (
                                    <section key={index}>
                                        <span class ="pl-2 pr-2 py-1 m-1 text-sm  bg-green-50 text-green-400 border border-green-400">{topic}</span>
                                    </section>
                                ))) 
                            :(<></>)}
                        </section>
                    </section>
                </div>
                ) :(<div>Could not find profile</div>)}
        </div>
        
    )
};

export default Studentprofile;