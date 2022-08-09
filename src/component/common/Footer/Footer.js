import React from "react";
import { logoUrl } from "../../../constant/constUrl.js";


function Footer() {
  return (
    <footer class="text-gray-900 body-font  bg-gray-200">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
    <img src={ logoUrl } alt="logo" />
    </a>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="ml-3 hover:text-gray-400 " href="/about">
        About
      </a>
      <a class="ml-3 hover:text-gray-400" href="/contact">
        
        Contact Us
      </a>
    </span>
  </div>
</footer>
  );
}

export default Footer;