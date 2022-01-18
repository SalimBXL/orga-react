import React, { useState } from "react";
import {useParams } from "react-router-dom";
import PropTypes from "prop-types";
import YearCalendar from "./YearCalendar";
import MonthCalendar from "./MonthCalendar";
import "./Dashboard.css";
import { getDateYMDFormated } from "../helpers";



const calendarData = {
    year: 2022,
    months: [
        {
            month_index: 1, 
            weeks: [
                {
                    date: "2022-01-03", 
                    jobs: {1: "5 FDG2", 2: "5 FDG2", 3: "5 FDG2", 4: "5 FDG2", 5: "5 FDG2", 6: ""},
                    absences: {1: "", 2: "", 3: "co", 4: "co", 5: "", 6: ""},
                    tasks: ["Stock"]
                },
                {
                    date: "2022-01-10", 
                    jobs: {1: "5 FDG2", 2: "5 FDG2", 3: "5 FDG2", 4: "5 FDG2", 5: "5 FDG2", 6: ""},
                    absences: {1: "", 2: "", 3: "", 4: "", 5: "", 6: ""},
                    tasks: []
                },
                {
                    date: "2022-01-17", 
                    jobs: {1: "5 FDG2", 2: "5 FDG2", 3: "5 FDG2", 4: "5 FDG2", 5: "5 FDG2", 6: ""},
                    absences: {1: "", 2: "", 3: "", 4: "", 5: "", 6: ""},
                    tasks: []
                },
                {
                    date: "2022-01-24", 
                    jobs: {1: "5 FDG2", 2: "5 FDG2", 3: "5 FDG2", 4: "5 FDG2", 5: "5 FDG2", 6: ""},
                    absences: {1: "", 2: "", 3: "", 4: "", 5: "", 6: ""},
                    tasks: ["Stock"]
                },
                {
                    date: "2022-01-31", 
                    jobs: {1: "5 FDG2", 2: "5 FDG2", 3: "5 FDG2", 4: "5 FDG2", 5: "5 FDG2", 6: ""},
                    absences: {1: "", 2: "", 3: "", 4: "mi", 5: "", 6: ""},
                    tasks: []
                }
            ]
        },
        {
            month_index: 2, weeks: [
                {
                    date: "", 
                    jobs: {}, 
                    absences: {}, 
                    tasks: []},
                {
                    date: "", jobs: {}, absences: {}, tasks: []},
                {
                    date: "", jobs: {}, absences: {}, tasks: []},
                {
                    date: "", jobs: {}, absences: {}, tasks: []},
                {
                    date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 3, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 4, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 5, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 6, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 7, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 8, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 9, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 10, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 11, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
        {
            month_index: 12, weeks: [
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []},
                {date: "", jobs: {}, absences: {}, tasks: []}
            ]
        },
    ]
};

const weeks = calendarData.months[0].weeks;


const Dashboard = () => {
    const {user_id} = useParams();
    const [dashboardDate, setDashboardDate] = useState(new Date());

    return (<div className="Dashboard vstack">
        
        <h1 className="Dashboard-title text-capitalize">Dashboard - {dashboardDate.getFullYear()}</h1>

        <h2 className="Dashboard-userName text-uppercase">Salim Joly</h2>

        <YearCalendar months={calendarData} />

        <MonthCalendar weeks={weeks} />
        
    </div>);
}

Dashboard.propTypes = {
    
}

Dashboard.defaultProps = {
    
}

export default Dashboard;