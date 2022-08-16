import React from "react";

function ContactForm({ submitFunction }){
    return (
        <div class="max-w-screen-md mx-auto p-5 ">
            <div class="text-center mb-16">
                <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                     Get In <span class="text-rose-400">Touch</span>
                 </h3>
            </div> 
           <form onSubmit={submitFunction}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">Name:</label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" id="name" required />
                    </div>
                </div>
               <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email:</label>
                        <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" id="email" required />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message:</label>
                        <textarea rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" required />
                    </div>
                </div>
                <button class="shadow bg-rose-300 hover:bg-rose-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;