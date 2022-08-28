import React from "react";
import {BiCalendar} from "react-icons/bi";
import { InlineWidget } from "react-calendly";
import DashboardHeader from "../../common/DashBoardHeader/DashBoardHeader";

function BookInterviews (){


    const bookingCompleted = (
        <>
          <button  className="absolute right-4 m-4 shadow bg-rose-300 hover:bg-rose-200 focus:shadow-outline focus:outline-none  py-1.5 px-4 rounded">
            Click to Complete Booking
          </button>
        </>
      );
    return (
        <>
        <DashboardHeader
            title={"Book Interview Slot"}
           icon={<BiCalendar class= "text-rose-300 text-2xl mt-1"/>}
        />
        <hr class="border-1 border-gray-300  mt-20"></hr>
        {bookingCompleted}
        <div className="calendlyApp ml-52 ">
        <InlineWidget url="https://calendly.com/pesto_moc/interview" />
      </div>
      </>

    )
}

export default BookInterviews;