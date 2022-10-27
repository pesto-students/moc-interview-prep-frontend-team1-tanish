import React,{lazy} from "react";

const DashboardCard = lazy(() => import("../../../../common/Cards/DashBoardCard/DashBoardCard"));


function DashBoardCards ({data}){
    return (
        <div>
           {data?
            <div className="DashBoardCards flex flex-row  ml-72 mt-4 space-x-20 ">
                <DashboardCard value={data.totalInterviews} description={"Interviews Taken"}/>
                <DashboardCard value={data.totalEarnings} description={"Total Earnings"}/>
                <DashboardCard value={data.totalStudentsMentored} description={"Students Mentored"}/>
                <DashboardCard value={data.noOfDays} description={"Days with MOC"}/>
            </div>
            :<> </>
           }
        </div>
    );
}

export default DashBoardCards;