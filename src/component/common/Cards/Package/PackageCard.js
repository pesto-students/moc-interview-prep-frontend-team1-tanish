import React,{Suspense,useEffect} from "react";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {useSelector,useDispatch} from "react-redux";
import {setMessage,clearMessage} from "../../../../Redux/slices/message";
import {createRazorOrder,getStudentById,updateStudent} from "../../../../constant/apiUrl";
import { createOrder, getDataAll, updateData } from "../../../../api/api";


function PackageCard({
    id,
    title,
    price,
    description,
    benefits,
  }) {

    const {user:currentUser, isLoggedIn,role} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
      }, [dispatch]);

      const getIntCount = (title) => {
        let intCount = 0;
        switch (title) {
          case "Basic":
            intCount = 1;
            break;
          default:
            intCount = 0;
        }
        return intCount;
     }

      const handlePayment = async (response, title) => {
        let student = await getDataAll(getStudentById + currentUser._id);
        let counter = getIntCount(title);
        if (student) {
          let count = student.res.data.package.interviewsLeft + counter;
          let pack = {
            package: {
              name: title,
              interviewsLeft: count,
            },
          };
          await updateData(updateStudent + student.res.data._id, pack);
          dispatch(setMessage( "Payment succesfull, Package " + title + " Added"));
        } else {
          dispatch(setMessage( "Payment succesfull, Package " + title + " Added"));
        }
      };

    const displayRazorpay = async (title, price) => {
        if (currentUser && isLoggedIn && role !== "interviewer") {
          let data = { amount: price.substring(1) * 100 };
          let order = await createOrder(createRazorOrder, data);
    
          let name = "mock prep";
          let email = "info@mockprep.com";
    
          if (currentUser) {
            name = currentUser.name;
            email = currentUser.email;
          }
    
          if (order.status === "success") {
            const res = await loadRazorPay();
    
            var options = {
              key: "rzp_test_vwNHNpvoK9Fkc4",
              currency: "INR",
              name: "Mock On Call ",
              description: title + " Package purchase",
              image:
                "https://res.cloudinary.com/mock-prep/image/upload/v1638303030/Mockprep/mock_gozyss.png",
              order_id: order.res.data.id,
              handler: function (response) {
                if (response) handlePayment(response, title);
              },
              prefill: {
                name: name,
                email: email,
              },
              notes: {
                item: "Mock Prep package purchase",
                package: title,
              },
              theme: {
                color: "#003399",
              },
            };
    
            if (res) {
              let rzp = new window.Razorpay(options);
              rzp.open();
            }
          } else {
            dispatch(setMessage("Error processing payment, try again later"));
          }
        } else {
          dispatch(setMessage("Please Sign In/Sign up as student to continue"));
        }
      };
    

    return(
        <Suspense fallback={<div>Loading</div>}>
        <section className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-64" key={id}>
          <p className="m-4">{title}</p>
          <h3 className="m-4 text-2xl font-bold">{price}</h3>
          <p className="m-4 text-gray-400">{description}</p>
          <ul className="m-4">
            {benefits.map((ben, index) => (
              <li key={index} class="flex my-4">
                <AiOutlineCheckCircle class= "text-rose-300 text-xl pt-1.5"/>
                {ben}
              </li>
            ))}
          </ul>
          <button onClick={() => displayRazorpay(title, price)} className="m-4 bg-rose-300 hover:bg-rose-200 text-gray-900 font-bold py-1.5 px-1.5 rounded pb-2">
                Pay Now
          </button>
        </section>
      </Suspense>
    )


}

export default PackageCard;

function loadRazorPay() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
      script.onload = () => {
        resolve(true);
      };
      script.onError = () => {
        resolve(false);
      };
      console.log(script.Razorpay);
    });
  }


