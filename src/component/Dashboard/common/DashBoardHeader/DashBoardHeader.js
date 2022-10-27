import React , { lazy}  from "react";
const Search = lazy(() => import("../Search/Search"));

function DashboardHeader({ icon, title, onSearch }) {
return (
    <div className="flex ">
        <div className="tab-title text-gray-900   absolute flex left-72 top-8">
            <i>{icon}</i>
            <p className="px-4 text-gray-900 text-lg">{title}</p>
        </div>
        <div className="tab-options  absolute right-4 top-8">
            {onSearch ? <Search placeholder="Search" onSearch={onSearch} /> : <></>}
        </div>
    </div>

);

}


export default DashboardHeader;