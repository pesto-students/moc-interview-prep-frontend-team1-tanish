import {lazy,useEffect} from "react";
import { Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import DummyLogInForm from "../../common/Form/DummyLogInForm";


import {login} from "../../../Redux/slices/auth";
import {clearMessage} from "../../../Redux/slices/message";



const Header = lazy(() => import("../../common/Header/Header"));
const Footer = lazy(() => import("../../common/Footer/Footer"));

function DummyLogIn(){
    const { isLoggedIn ,role} = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);

    const submit = async(e) => {
        e.preventDefault();
        const { email, password,role } = e.target.elements;  
        dispatch(login({ email, password,role}));
    }
    if (isLoggedIn) {
        return <Navigate to={`/${role}/dashboard`} />;
    }
    return (
          <section className="signin">
            <Header></Header>
            <DummyLogInForm submitFunction={submit}/>
            {message && (<p className="mb-10 text-green-500 text-center">{message}</p>)}
            <Footer></Footer>
        </section>
    )
};


export default DummyLogIn;