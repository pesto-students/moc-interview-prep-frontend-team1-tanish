import React from "react";

function Interviewer () {
    return(
        <section class="text-gray-600 body-font bg-rose-50">
            <h2 class="py-8 title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900 text-center">Meet our Interviewers</h2>
            <div class="container px-5 pt-19 pb-20 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class=" text-center"> 
                            <img alt="testimonial" class="w-30 h-30 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/women/75.jpg"/>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Matias lehtola</h2>
                            <p class="text-orange-500">Technical Architect, Facebook</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="text-center">
                            <img alt="testimonial" class="w-30 h-30 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/men/45.jpg"/>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Gabriel Ortega</h2>
                            <p class="text-orange-500">Software Design and Lead, Cars24</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-30 h-30 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/women/55.jpg"/>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Chiara Marchand</h2>
                            <p class="text-orange-500">Software Engineer, Bookmy show</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Interviewer;