import { lazy,useState} from "react";
import { useDispatch } from "react-redux";
import SignUpForm from "../../common/Form/SignUpForm";
import { insertData,getData } from "../../../api/api";
import { insertInterviewer,insertStudent,findStudent,findInterviewer} from "../../../constant/apiUrl";
import alertActionCreator from "../../../Redux/Action Creators/alertActionCreator";




const Header = lazy(() => import("../../common/Header/Header"));
const Footer = lazy(() => import("../../common/Footer/Footer"));


function SignUp (){

    let [isSignedUp,setIsSignedUp] = useState(false);
    let [uniqueUser,setUniqueUser] = useState(true);
    const dispatch = useDispatch();

    const submit = async(e) => {
        e.preventDefault();
        e.status = "pending";
        const { name, email, password,role} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            password: password.value
        };

    
        console.log(details);
        console.log(role.value==="Student");
        let foundUser = (role.value==="Student")?await  getData(findStudent,{ params: {email: email.value}}):await  getData(findInterviewer,{ params: {email: email.value}});
        console.log(foundUser);
        if (foundUser.status ==="Unique"){
            let response = (role.value==="Student") ? await insertData(insertStudent, details):await insertData(insertInterviewer, details);
            if (response.status === "success") {
                console.log(response.status);
                alertActionCreator.setMessage(dispatch, "Sign up succesfull");
                setIsSignedUp(true);
            } else {
                console.log(response.status);
                alertActionCreator.setError(dispatch, "Sign up failed");
                setIsSignedUp(false);
            }
        }else{
            console.log("inside else part i.e duplicate");
            setUniqueUser(false);
        }
        setTimeout(()=>setUniqueUser(true),3000);
        setTimeout(()=>setIsSignedUp(false),3000);
    }
    return (
        <section className="signup">
            <Header></Header>
            <SignUpForm submitFunction={submit}/> 
            {uniqueUser ?<p> </p>:<p className="mb-10 text-green-500 text-center">The Enetered Email is already Registered With us</p>}
            {isSignedUp ?<p className="mb-10 text-green-500 text-center">Succesfully SignedUp</p>:<p></p>}
            <Footer></Footer>
        </section>
    );

}


export default SignUp;