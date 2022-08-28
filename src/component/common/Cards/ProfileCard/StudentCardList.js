import { Link } from "react-router-dom";


function StudentCardList({student,profileOwner}){
    return(
        <div class="w-full bg-white rounded-lg p-4 flex flex-col justify-center items-center border border-rose-300">
            <div class="mb-4">
                <img alt="testimonial" class="object-center object-cover rounded-full h-24 w-24" src={student.image}/>
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
            {(profileOwner !== "Student")?(
                    <button className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600 ">
                        <Link to ={`../bookinterview/${student._id}`} >Book Interview</Link>
                    </button>
                    ):(
                       <></>
            )} 
            

        </div>
    );

};

export default StudentCardList;