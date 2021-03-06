import React from "react";
import PropTypes from 'prop-types';
import uuid from "react-uuid";
import { absenceColor, getDateYMDFormated, getMonday } from "../../helpers/helpers";
import "./Dashboard.css";

const MonthCalendar = ({weeks}) => {
    
    const weekLine = ({date, jobs, absences, tasks}) => {
        const key = date ? date : uuid();
        const bg = (date === getMonday(new Date())) ? "table-warning" : null;
        const style = { height: "48px" };
        return (
        <tr key={key} style={style} className={bg}>
            {weekLineDescription(date, tasks)}
            {weekLineDays(jobs, absences)}
        </tr>
    )};

    const weekLineDescription = (weekdate, tasks) => (
        <th scope="row" className="Dashboard-monthCalendar-weekCell">
            <p>
                {weekdate}
                <span className="badge rounded-pill bg-warning text-dark">
                    {tasks.toString()}
                </span>
            </p>
        </th>
    );
    
    const weekLineDays = (jobs, absences) => Object.values(jobs).map((batch, jidx) => {
        const absence = Object.values(absences)[jidx];
        const style = {backgroundColor: absence ? absenceColor(absence) : ""};
        return (
        <td key={jidx} className="Dasboard-monthCalendar-dayCell" style={style}>
            {batch.split(" ").map((job, idx) => <span key={idx} className="badge bg-primary">{job}</span>)}
        </td>
    )});

    return (
        <div className="Dashboard-monthCalendar">
            <table className="table table-sm table-responsive table-hover">
                <thead>
                    <tr >
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
                    {weeks.map((week) => weekLine(week))}
                </tbody>
            </table>
        </div>
)};

MonthCalendar.propTypes = {
    weeks: PropTypes.array
}

MonthCalendar.defaultProps = {
    weeks: []
}

export default MonthCalendar;