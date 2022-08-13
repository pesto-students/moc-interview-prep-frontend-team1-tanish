import { lazy } from "react";
import { fallback } from "../../constant/navList";



const Header = lazy(() => import("../common/Header/Header"));
const Footer = lazy(() => import("../common/Footer/Footer"));


function Contact (){
    return(
        <section className="contact">
            <Header></Header>
            <section>{fallback}</section>
            <Footer></Footer>
        </section>
    )
}

export default Contact;