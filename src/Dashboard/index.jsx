import React from "react";
import {useParams } from "react-router-dom";
import "./Dashboard.css";

const YearCalendar = () => (
    <div className="Dashboard-yearCalendar d-none d-md-block">
        <p>
            [x][x][x][x][x] [x][x][x][x][x] [x][x][x][x][x] <br />
            [x][x][x][x][x] [x][x][x][x][x] [x][x][x][x][x] <br />
            [x][x][x][x][x] [x][x][x][x][x] [x][x][x][x][x] <br />
            [x][x][x][x][x] [x][x][x][x][x] [x][x][x][x][x] <br />
            [x][x][x][x][x] [x][x][x][x][x] [x][x][x][x][x] <br />
            [x][x][x][x][x] [x][x][x][x][x] [x][x][x][x][x] <br />
        </p>
    </div>
);

const MonthCalendar = () => {
    const weekInMonth = 5;
    const weekLine = (dateOfTheFirstDayOfTheWeek, weekJobs) => (
        <tr style={{height: "48px"}}>
            {weekLineDescription(dateOfTheFirstDayOfTheWeek)}
            {weekLineDays(weekJobs)}
        </tr>
    );
    const weekLineDescription = (weekdate) => (<th scope="row" className="Dasboard-monthCalendar-weekCell">{weekdate}</th>);
    const weekLineDays = (jobs) => jobs.map((jour, jidx) => 
        <td key={jidx} className="Dasboard-monthCalendar-dayCell">
            {jour.split(" ").map((job, idx) => (<span key={idx} className="badge bg-primary">{job}</span>))}
        </td>
    );
    return (
        <div className="Dashboard-monthCalendar">
            <h3 className="Dashboard-monthCalendar text-uppercase">January</h3>
            <table className="table table-sm table-responsive table-hover">
                <thead>
                    <tr className="Dashboard-monthCalendar-weekCell">
                        <th scope="col">Weeks</th>
                        <th scope="col">Mo</th>
                        <th scope="col">Tu</th>
                        <th scope="col">We</th>
                        <th scope="col">Th</th>
                        <th scope="col">Fr</th>
                        <th scope="col">We</th>
                    </tr>
                </thead>
                <tbody>
                    {weekLine("03/01", ["5 FDG2","5 FDG2","5 FDG2","5 FDG2","5 FDG2",""])}
                    {weekLine("10/01", ["5 FDG2","5 FDG2","5 FDG2","5 FDG2","5 FDG2",""])}
                    {weekLine("17/01", ["5 FDG2","5 FDG2","5 FDG2","5 FDG2","5 FDG2",""])}
                    {weekLine("24/01", ["5 FDG2","5 FDG2","5 FDG2","5 FDG2","5 FDG2",""])}
                    {weekLine("31/01", ["5 FDG2","5 FDG2","5 FDG2","5 FDG2","5 FDG2",""])}
                </tbody>
            </table>
        </div>
)};

const Dashboard = () => {
    const {user_id} = useParams();

    return (<div className="Dashboard vstack">
        
        <h1 className="Dashboard-title text-capitalize">Dashboard</h1>

        <h2 className="Dashboard-userName text-uppercase">Salim Joly</h2>
        <YearCalendar />

        <MonthCalendar />

        
    </div>);
}

export default Dashboard;