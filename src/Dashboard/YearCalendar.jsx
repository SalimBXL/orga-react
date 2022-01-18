import React from "react";
import PropTypes from 'prop-types';
import { absenceColor, jobColor, getDateYMDFormated, MONTHNAME } from "../helpers";
import "./Dashboard.css";

const YearCalendar = ({calendarData, handleClick}) => {

    const handleClickOnCalendar = (monthIndex) => {
        handleClick(monthIndex);
    }

    const printMonth = (monthIndex, weeks) => (
        <div onClick={() => handleClickOnCalendar(monthIndex)}>
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
    );

    
    return (
        <div className="Dashboard-yearCalendar d-none d-md-block">
            <div className="hstack">
                {calendarData.months.map((month, idx) => (
                    <div key={idx} className="col">
                        {printMonth(month.month_index, month.weeks)}
                    </div>)
                )}
            </div>
        </div>
    )
};

YearCalendar.propTypes = {
    calendarData: PropTypes.shape({
        year: PropTypes.number,
        months: PropTypes.arrayOf(PropTypes.shape({
            month_index: PropTypes.number, 
            weeks: PropTypes.arrayOf(PropTypes.shape({
                date: PropTypes.string, 
                jobs: PropTypes.shape({
                    1: PropTypes.string,
                    2: PropTypes.string,
                    3: PropTypes.string,
                    4: PropTypes.string,
                    5: PropTypes.string
                }),
                absences: PropTypes.shape({
                    1: PropTypes.string,
                    2: PropTypes.string,
                    3: PropTypes.string,
                    4: PropTypes.string,
                    5: PropTypes.string
                }),
                tasks: PropTypes.array
            }))
        }))
    })
}

YearCalendar.defaultProps = {
    calendarData: {
        year: (new Date()).getFullYear(),
        months: [
            {
                month_index: (new Date().getMonth()+1),
                weeks: [
                    {
                        date: getDateYMDFormated(),
                        jobs: {1: "", 2: "", 3: "", 4: "", 5: ""},
                        absences: {1: "", 2: "", 3: "", 4: "", 5: ""},
                        tasks: []
                    }
                ]
            }
        ]
    }
}

export default YearCalendar;