import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import SpinWheel from "../../helpers/SpinWheel";
import { MONTHNAME } from "../../helpers/helpers";
import axios from "axios";
import YearCalendar from "./YearCalendar";
import MonthCalendar from "./MonthCalendar";
import "./Dashboard.css";

import jsonData from "../../data/calendar.json";

const API_URL = "127.0.0.1";

const Dashboard = () => {
    const {user_id} = useParams();
    const [dashboardDate, setDashboardDate] = useState(new Date());
    const [calendarData, setCalendarData] = useState(null);
    const [fetchingCalendarData, setFetchingCalendarData] = useState(false);

    function handleYearCalendarClick(monthIndex) {
        setDashboardDate(prev => {
            const year = prev.getFullYear().toString();
            const day = prev.getDate().toString();
            const month = monthIndex < 10 ? `0${monthIndex}` : monthIndex.toString();
            const newDate = new Date(`${year}-${month}-${day}`);
            return newDate;
        });
    }

    async function getCalendarData() {
        setFetchingCalendarData(true);
        //const data = await axios.get(API_URL);
        const data = jsonData;
        setCalendarData((prev) => {
            setFetchingCalendarData(false);
            return data;
        });
    }

    useEffect(() => {
        getCalendarData();
    }, []);

    
    const RenderCalendars = () => {
        const month = dashboardDate.getMonth();
        const weeks = calendarData.months[month].weeks;
        return (
        <div>
            <YearCalendar calendarData={calendarData} handleClick={handleYearCalendarClick}/>
            <h3 className="Dashboard-monthCalendar text-uppercase">
                {MONTHNAME[month+1]}
            </h3>
            <MonthCalendar weeks={weeks} />
        </div>)
    };

    return (<div className="Dashboard vstack">
        <div className="card shadow-sm m-2 p-1" style={{backgroundColor: "whitesmoke"}}>
            <h1 className="Dashboard-title text-capitalize text-dark">
                <i className="bi bi-grid-3x2-gap" /> Dashboard <br />
                <span className="Dashboard-userName text-uppercase text-secondary">Salim Joly</span>
            </h1>
            
        </div>

        {fetchingCalendarData 
            ? <SpinWheel />
            : calendarData && <RenderCalendars />
        }
    </div>);
}


export default Dashboard;