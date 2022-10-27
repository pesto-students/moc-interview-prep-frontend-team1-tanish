import React,{lazy} from "react";

const DashboardCard = lazy(() => import("../../../../common/Cards/DashBoardCard/DashBoardCard"));


function DashBoardCards ({data}){
    return (
        <div>
           {data?
            <div className="DashBoardCards flex flex-row  ml-72 mt-4 space-x-20">
                <DashboardCard value={data.totalInterviews} description={"Interviews Given"}/>
                <DashboardCard value={data.topicsOnging} description={"Topics Ongoing"}/>
                <DashboardCard value={data.interviewRating} description={"Interview Rating"}/>
                <DashboardCard value={data.ranking} description={"Ranking"}/>
            </div>
            :<> </>
           }
        </div>
    );
}

export default DashBoardCards;