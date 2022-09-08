import React,{useState,useEffect,lazy} from "react";
// import { useSelector } from "react-redux";
import {getPricing} from "../../constant/apiUrl";
import { getDataAll } from "../../api/api";
import {useSelector} from "react-redux";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { fallback } from "../../constant/navList";

const Pricing = lazy(()=> import("./Pricing"));


function Package (){
    let [pricing, setPricing] = useState([]);
    const { message } = useSelector((state) => state.message);

    useEffect(()=>{
        (async() =>{
            let response = await getDataAll(getPricing);
            if(response.res.data){
                let data= response.res.data;
                setPricing(data);   
            } 
        })();
        return() =>{

        };
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    },[]);
    return (
        <>
            <Header></Header>
            {pricing.length ? <Pricing pricing={pricing} /> : <>{fallback}</>}
            {message && (<p className="mb-5 text-green-500 text-center">{message}</p>)}
            <Footer></Footer>
        </>

    );
}

export default Package;