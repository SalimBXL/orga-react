import React from "react";
import PropTypes from 'prop-types';
import { absenceColor, jobColor } from "../helpers";
import "./Dashboard.css";

const MONTHNAME = {
    1: "january", 2: "february", 3: "march", 4: "april", 5: "may", 6: "june", 
    7: "july", 8: "august", 9: "september", 10: "october", 11: "november", 12: "december"
};

const YearCalendar = ({months}) => {

    const printMonth = (monthIndex, weeks) => {
        
        return (
            <div>
                <span className="text-capitalize">{MONTHNAME[monthIndex]}</span>
                <table>
                    <tbody key={MONTHNAME[monthIndex]}>
                        {weeks.map(({date, jobs, absences}, idx) => {
                            const jobsValues = Object.values(jobs);
                            const absencesValues = Object.values(absences);
                            return (<tr key={MONTHNAME[monthIndex] + "-" + idx}>
                                {[0,1,2,3,4,5].map(x => {
                                    const key = `cell-${date}-${x}`;
                                    return (
                                        <td key={key} style = {{
                                            backgroundColor: 
                                                (absencesValues[x] && absencesValues[x].length) 
                                                    ? absenceColor(absencesValues[x])
                                                    : (jobsValues[x] && jobsValues[x].length) 
                                                        ? jobColor(jobsValues[x])
                                                        : ""
                                            }}>
                                        </td>
                                    )
                                })}
                            </tr>)}
                        )}
                    </tbody>
                </table>
            </div>
        )
    };

    return (
        <div className="Dashboard-yearCalendar d-none d-md-block">
            <div className="hstack">
                {months.map((month, idx) => (
                    <div key={idx} className="col">
                        {printMonth(month.month_index, month.weeks)}
                    </div>)
                )}
            </div>
        </div>
    )
};

YearCalendar.propTypes = {
    months: PropTypes.array
}

YearCalendar.defaultProps = {
    months: []
}

export default YearCalendar;