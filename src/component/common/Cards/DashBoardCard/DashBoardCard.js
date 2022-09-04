import React from "react";


function DashboardCard ({description, value}){
    return(
        <span  class="block p-4  bg-slate-50 rounded-lg border border-rose-300 shadow-md hover:bg-rose-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-44">
            <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white">{description}  </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{value}</p>
        </span>
    );
}

export default DashboardCard;