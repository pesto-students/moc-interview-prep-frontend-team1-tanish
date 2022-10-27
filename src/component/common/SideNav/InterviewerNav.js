import React  from "react";
import {useSelector} from "react-redux";
import { logoUrl } from "../../../constant/constUrl.js";
import { MdDashboard,MdAddAlert } from "react-icons/md";
import {VscSmiley} from "react-icons/vsc";
import {CgProfile} from "react-icons/cg";
import {logout} from "../../../Redux/slices/auth";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function InterviewerNav(){
    const {user:currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logOut = () =>{
        dispatch(logout());
    }
     return (
        <div class="w-60 h-full shadow-md bg-white px-4 absolute p-5 text-gray-900 text-lg">
            <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 py-4 px-6" to='/'>
                <img src={ logoUrl } alt="logo"/>
            </Link>
            <div class="pt-4 pb-2 px-6">
                <div class="flex items-center">
                    <div class="shrink-0">
                        {currentUser.image?
                          <img alt="testimonial" class="w-12 h-12 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={currentUser.image}/>
                          :<img alt="testimonial" class="w-12 h-12 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://res.cloudinary.com/mockoncall/image/upload/v1662030947/users/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg_ddg516.jpg"/>
                        }
                    </div>
                    <div class="grow ml-3">
                        <p class="text-lg text-rose-300 text-center mb-3">{currentUser.name}</p>
                    </div>
                </div>               
            </div>
            <ul class="relative text-gray-900 text-lg">
                <li class="relative">
                    <div class="flex items-center text-sm py-10 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <CgProfile class= "text-rose-300 text-2xl"/>
                        <Link to={`interviewerprofile/${currentUser._id}`}>
                            <span class = "px-2 text-gray-900 text-lg">My Profile</span>
                        </Link>
                    </div>
                </li>
                <li class="relative"> 
                    <div className="flex items-center text-sm py-10 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">                 
                        <MdDashboard class= "text-rose-300 text-2xl"/>
                        <Link to="dashboard"> 
                            <span class = "px-2 text-gray-900 text-lg">Dashboard</span>
                        </Link>
                    </div>                  
                </li>
                <li class="relative">
                    <div className="flex items-center text-sm py-10 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">                 
                        <MdAddAlert class= "text-rose-300 text-2xl"/>
                        <Link to="upcoming"> 
                            <span class = "px-2 text-gray-900 text-lg grow break-words">Interviews</span>
                        </Link>
                    </div>                    
                </li>
                <li class="relative">
                    <div class="flex items-center text-sm py-10 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <VscSmiley class= "text-rose-300 text-2xl"/>
                        <Link to="studentlist">
                            <span class = "px-2 text-gray-900 text-lg">Student List</span>
                        </Link>
                    </div>
                </li>
                <li class="relative">
                    <div class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out " >
                        <button class="bg-rose-300 hover:bg-rose-200 text-gray-900 font-bold py-2 px-6 rounded pb-2" type="submit" onClick={() => logOut()}>
                            Logout
                        </button>
                    </div>
                </li>  
            </ul>
        </div>
     );
}

export default InterviewerNav;