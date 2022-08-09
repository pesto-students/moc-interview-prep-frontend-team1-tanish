import React, { lazy} from "react"
const Header = lazy(() => import("../../common/Header/Header"));

function Introduction() {
    return (
        <div id="introduction">
        <Header></Header>   
        <section class="text-gray-900 body-font bg-rose-100">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">Don't worry about your "<span class="text-rose-400">Preparation</span>",
                        <br class="hidden lg:inline-block"/>Come join us for "<span class="text-rose-400">Repetition</span>".
                    </h1>
                    <p class="mb-8 leading-relaxed text-lg">Talk to the people who believe in helping others.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-rose-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-200 rounded text-lg"> <a href='/signIn'>Sign-In</a> </button>
                        <button class="ml-4 inline-flex text-gray-900 bg-gray-50 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><a href='/resources'>Free-Resources</a></button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Introduction;