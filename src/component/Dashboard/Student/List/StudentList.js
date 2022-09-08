import React, {useState,useEffect,lazy} from "react";
import { useSelector } from "react-redux";
import {MdListAlt} from "react-icons/md";
import { getDataAll } from "../../../../api/api";
import { getStudents } from "../../../../constant/apiUrl";
import DashboardHeader from "../../common/DashBoardHeader/DashBoardHeader";
const StudentCardList = lazy(() => import("../../../common/Cards/ProfileCard/StudentCardList"));


function StudentList(){
    const {isLoggedIn} = useSelector((state) => state.auth);
    let [students, setStudents] = useState([]);
    let [studentList, setStudentList] = useState([]);

    useEffect(()=> {
        (async() =>{
            let response = await getDataAll(getStudents);
            if(response.res.data){
                let data= response.res.data;
                setStudents(data); 
                setStudentList(data)      
            } 
        })();
        return() =>{

        }; 
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    },[isLoggedIn]);
    
    const onSearch = (value) => {
        let filtered = students.filter(
          (val) =>
            val.name.toLocaleLowerCase().includes(value) ||
            val.degree.toLocaleLowerCase().includes(value) ||
            val.company.toLocaleLowerCase().includes(value) ||
            val.skills.includes(value)
        );
    
        setStudentList(filtered);
    };

    return(
        <div className="studentListContainer">
            <DashboardHeader
                title={"Student List"}
                icon={<MdListAlt class= "text-rose-300 text-2xl mt-1"/>}
                onSearch={onSearch}
            />
            <hr class="border-1 border-gray-300  mt-20"></hr>
            <section class="max-w-5xl mx-auto px-2 sm:px-6 lg:px-4 py-12 ml-48">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
                    {studentList.map((student, index) => (
                            <section key={index}>
                                {!student.listed ? (
                                    <StudentCardList
                                        student={student}
                                        profileOwner = "Student"
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

export default StudentList;


