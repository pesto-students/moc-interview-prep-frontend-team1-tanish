import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import {getStudentById} from "../../../../constant/apiUrl";
import { getDataAll} from "../../../../api/api";
import {useSelector} from "react-redux";

function StudentCardList({student,profileOwner}){
    const {user:currentUser} = useSelector((state) => state.auth);
    let [interviewsLeft, setInterviewsLeft] = useState(false);

    useEffect(()=> {
        (async() => {
          let student = await getDataAll(getStudentById + currentUser._id);
          let count = student.res.data.package.interviewsLeft;
          if(count >= 1){
          
            setInterviewsLeft(true);
          }
        })();
        return () =>{

        } ; 
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[])

    return(
        <div class="w-full bg-white rounded-lg p-4 flex flex-col justify-center items-center border border-rose-300">
            <div class="mb-4">
                {student.image?
                    <img alt="testimonial" class="object-center object-cover rounded-full h-24 w-24" src={student.image}/>
                    :<img alt="testimonial" class="object-center object-cover rounded-full h-24 w-24" src="https://res.cloudinary.com/mockoncall/image/upload/v1662030947/users/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg_ddg516.jpg"/>
                }
            </div>
            <div class="text-center mb-2">
                <p class="text-xl text-gray-700  mb-2">{student.name}, {student.degree}</p>
                <p class="text-base text-gray-400 font-normal">{student.company}</p>
            </div>
            <button className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600 mb-4">
                    {(profileOwner === "Student")?(
                        <Link to ={`../studentprofile/${student._id}`} >View Profile</Link>
                    ):(
                        <Link to ={`../interviewerprofile/${student._id}`} >View Profile</Link>
                    )}
            </button>
            {(profileOwner !== "Student")?
                (<>
                    {(interviewsLeft)?
                        (
                            <button className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600 ">
                                <Link to ={`../bookinterview/${student._id}`} >Book Interview</Link>
                            </button>
                        )
                        :(
                            <button className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600 ">
                                <Link to ={`/pricing/`} >Pay to Book Interview</Link>
                            </button>
                        )
                    }
                </>)
                :(<></>)
            } 
            

        </div>
    );

};

export default StudentCardList;