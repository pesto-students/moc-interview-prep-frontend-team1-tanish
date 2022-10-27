import React from "react";
import {Link} from "react-router-dom";
import { logoUrl } from "../../../constant/constUrl.js";


function Footer() {
  return (
    <footer class="text-gray-900 body-font  bg-gray-200">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" to="/">
    <img src={ logoUrl } alt="logo" />
    </Link>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link class="ml-3 hover:text-gray-400 " to="/about">
        About
      </Link>
      <Link class="ml-3 hover:text-gray-400" to="/contact">  
        Contact Us
      </Link>
      <Link class="ml-3 hover:text-gray-400" to="/resources">       
        Free-Resources
      </Link>
    </span>
  </div>
</footer>
  );
}

export default Footer;