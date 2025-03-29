"use client";

import Sidebar from "../Sidebar/Sidebar";
import Filters from "../Calendar/Filters"
import TimeNavigation from "../Calendar/TimeNavigation"
import TeamGrid from "../Calendar/TeamGrid"

import "@/components/Calendar/Calendar.css"

const Calender = () => {

    return (
        <div className="calendar-content">
            <div className="calendar-grid" id="grid-all">
                <div className="team-filter-bar">
                    <Filters />
                    <TimeNavigation />
                </div>
                <TeamGrid />
            </div>
            <Sidebar />
        </div>
    );
};

export default Calender;
