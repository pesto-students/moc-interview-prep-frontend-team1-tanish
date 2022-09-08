import React  from "react";
import { logoUrl } from "../../../constant/constUrl.js";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Header(){
   
  const { user:currentUser,isLoggedIn,role} = useSelector((state) => state.auth);
   return (
    <header class="text-gray-900 body-font  bg-rose-100">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to ="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={ logoUrl } alt="logo" />
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to = "/contact" class="mr-5 hover:text-gray-400 ">Contact Us</Link>
          <Link to = "/pricing" class="mr-5 hover:text-gray-400 ">Pricing</Link>
          {isLoggedIn?(
            <img alt="testimonial" class="mr-5 w-12  h-12 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={currentUser.image}/>
          ):(
            <Link to = "/signin" class="mr-5 hover:text-gray-400">Sign-In</Link>
          )}
        </nav>
        {isLoggedIn?(
          <button class="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-100 rounded text-base mt-4 md:mt-0 hover:text-gray-600" >
            <Link to={`/${role}/dashboard`}>DashBoard</Link>       
          </button>
        ):(
          <button class="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600" >
            <Link to='/signup'>Sign-Up</Link>       
        </button>
        )}
        
      </div>
    </header>
   );
}

export default Header;