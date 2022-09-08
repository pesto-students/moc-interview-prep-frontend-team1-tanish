import React ,{useEffect}from "react";
import {useSelector,useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { InlineWidget} from "react-calendly";
import {BiCalendar} from "react-icons/bi";
import {getStudentById,insertInterviews,updateStudent,getInterviewerById} from "../../../../constant/apiUrl";
import { getDataAll,insertData} from "../../../../api/api";
import {setMessage,clearMessage} from "../../../../Redux/slices/message";
import DashboardHeader from "../../common/DashBoardHeader/DashBoardHeader";

function BookInterviews (){

  const {user:currentUser} = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const {profileId}  = useParams();

  

    useEffect(() => {
        dispatch(clearMessage());
      }, [dispatch]);

  const handleBooking = async () => {
    let student = await getDataAll(getStudentById + currentUser._id);
    let interviewer = await getDataAll(getInterviewerById+ profileId);
    if (
      student.res.data.package &&
      student.res.data.package.interviewsLeft > 0
    ) {
      let value = createInterviews(student.res.data,interviewer.res.data);
      let pack = {
        package: {
          interviewsLeft: --student.res.data.package.interviewsLeft,
          name:student.res.data.package.name,
        },
      };

      insertData(insertInterviews, value);
      insertData(updateStudent+currentUser._id, pack);
      dispatch(setMessage("Booking Confirmed"));
    } else {
      dispatch(setMessage("Upgrade Package to Book"));
    }
  };

  function createInterviews(student,interviewer) {
    console.log(student);
    if (student) {
      let options = {
        student: {
          name: student.name,
          email: student.email,
          id: student._id,
        },
        interviewer: {
          name: interviewer.name,
          email: interviewer.email,
          id: interviewer._id,
        },
        studentFeedback: {
          interviewerExperience: 0,
        },
        interviewerFeedback: {
          overallRating: 0,
        },

        topic: "Interview Preparation",
        date: "01/10/22",
        time: "15:30",
        meetingUrl:
          "https://calendly.com/events/41fe4f04-b190-4c90-b2bd-c13a52dc16b5/google_meet",
        status: "new",
        key: 1,
      };

      return options;
    }
  }
    const bookingCompleted = (
        <>
          <button onClick={handleBooking} className="absolute right-4 m-2 shadow bg-rose-300 hover:bg-rose-200 focus:shadow-outline focus:outline-none  py-1.5 px-4 rounded">
            Click to Complete Booking
          </button>
          {message && (<p className="absolute right-52 text-green-600 text-center">{message}</p>)}
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

