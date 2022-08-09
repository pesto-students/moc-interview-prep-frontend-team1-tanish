import React  from "react";
import { logoUrl } from "../../../constant/constUrl.js";


function Header(){
   return (
    <header class="text-gray-900 body-font  bg-rose-100">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
        <img src={ logoUrl } alt="logo" />
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-400 " href='/contact'>Contact Us</a>
        <a class="mr-5 hover:text-gray-400" href='/signIn'>Sign-In</a>
      </nav>
      <button class="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600" >
        <a href='/signUp'>Sign-Up</a>       
      </button>
    </div>
  </header>
   );
}

export default Header;