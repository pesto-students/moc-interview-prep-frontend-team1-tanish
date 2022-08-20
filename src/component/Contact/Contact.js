import { lazy,useState} from "react";
// import { fallback } from "../../constant/navList";
import ContactForm from "../common/Form/ContactForm";
import { insertQuery } from "../../constant/apiUrl";
import { insertData } from "../../api/api";
import { useDispatch } from "react-redux";
import alertActionCreator from "../../Redux/Action Creators/alertActionCreator";




const Header = lazy(() => import("../common/Header/Header"));
const Footer = lazy(() => import("../common/Footer/Footer"));


function Contact (){
    let [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const submit = async(e) => {
        e.preventDefault();
        e.status = "pending";
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await insertData(insertQuery, details);

        if (response.status === "success") {
            alertActionCreator.setMessage(dispatch, "Query Sent Succesfully");
            setLoading(true);
        } else {
            alertActionCreator.setError(dispatch, "Query Sending Failed");
            setLoading(false);
        }

    }

    return(
        <section className="contact">
            <Header></Header>
            {/* <section>{fallback}</section> */}
            <section id="query">
            <ContactForm submitFunction={submit}/>
            {loading ?<p className="mb-10 text-green-500 text-center">Message Sent Succesfully</p>:<p></p>}
            </section>
            <Footer></Footer>
        </section>
    )
}

export default Contact;