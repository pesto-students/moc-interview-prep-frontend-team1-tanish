import {lazy,useState} from "react";
import SignInForm from "../../common/Form/SignInForm";
import { getDataSignIn } from "../../../api/api";
import {findStudent,findInterviewer} from "../../../constant/apiUrl";



const Header = lazy(() => import("../../common/Header/Header"));
const Footer = lazy(() => import("../../common/Footer/Footer"));

function SignIn(){
    let [emailRegistered,setEmailRegistered] = useState(true);
    let [isLoggedIn,setIsLoggedIn] = useState(false);

    const submit = async(e) => {
        e.preventDefault();
        e.status = "pending";
        console.log(e);
        const { email, password,role} = e.target.elements;
        let foundUser = (role.value==="Student")?await  getDataSignIn(findStudent,{ params: {email: email.value}}):await  getDataSignIn(findInterviewer,{ params: {email: email.value}});
        console.log(foundUser);
        if (foundUser.status ==="OLD_USER"){
            if (foundUser.data.password === password.value){
                setIsLoggedIn(true);
            }
        
        }else{
            setEmailRegistered(false);
        }
        setTimeout(()=>setEmailRegistered(true),3000);

    }
    return (
        <section className="signin">
        <Header></Header>
        <SignInForm submitFunction={submit}/>
        {isLoggedIn ?<p> </p>:<p className="mb-10 text-green-500 text-center">SignIn Successful</p>}
        {emailRegistered ?<p> </p>:<p className="mb-10 text-green-500 text-center">The Enetered Email is not Registered With us</p>}
        <Footer></Footer>
        </section>
    )
};


export default SignIn;