import { lazy,Suspense } from "react";
import {Link} from "react-router-dom";
import { fallback } from "../../constant/navList";



const Header = lazy(() => import("../common/Header/Header"));
const Footer = lazy(() => import("../common/Footer/Footer"));

function About (){
    return (
        <div>
            <Header/>
            <Suspense fallback={fallback}>
            <section class="pt-20 pb-10 bg-gradient-to-r from-zinc-200 to-rose-50 text-center">
                <h2 class="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
                    We are <span class="text-rose-400">Mock on Call</span>
                </h2>
                <div className="sm:text-xl text-xl mb-4 text-gray-900">
                <p className="about py-1">
                    Providing solutions to interview preparation.
                </p>
                <p className="about py-1">
                    At Mock on Call, we want to help students prepare of technical
                    interviews in an effective way.{" "}
                </p>
                <p className="about py-1">
                    As we are seeing a boom in software and related technologies,
                    Organizations are looking for potential people to fulfill these
                    roles,
                </p>
                <p className="about py-1">
                    however interviews as seen as one of the roadblocks even by
                    potential individuals due to lack of knowledge and guidance.
                </p>
                <p className="about py-1">
                    We are trying to solve this issue by working on the core basics of
                    an interview process and allowing our users 
                </p>
                <p className="about py-1">
                    to engage with
                    experienced individuals in their field to be guided in the right
                    way to overcome any gaps in their preparation.
                </p>
                    <button class="text-white bg-rose-300 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-rose-200 rounded text-lg"> <Link to='/signin'>Join Us</Link> </button>
                
                </div>
            </section>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default About;