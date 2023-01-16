import React from "react";
import PropTypes from 'prop-types';
import { absenceColor, jobColor, getDateYMDFormated, MONTHNAME } from "../../helpers/helpers";
import "./Dashboard.css";
import { Calendar } from "antd";

const YearCalendar = ({calendarData, handleClick}) => {
    const {jobs, absences, period, user} = calendarData;
    const {from, to} = period;

    //console.log("CALENDAR", calendarData);
    console.log(user, from, to, jobs, absences);



    /*
    const handleClickOnCalendar = (monthIndex) => {
        handleClick(monthIndex);
    }
    */

    /*
    const printMonth = (monthIndex, weeks, style) => {
        
        return (
        <div onClick={() => handleClickOnCalendar(monthIndex)} style={style}>
            <span className="text-capitalize">{MONTHNAME[monthIndex].substr(0,3)}</span>
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
    )};
    */

    

    return (
        <div className="Dashboard-yearCalendar d-none d-md-block">
            <div className="hstack">
                {calendarData.months.map((month, idx) => {
                    let m = ((new Date()).getMonth() + 1);
                    let y = ((new Date()).getFullYear());
                    m = Number((m < 10) ? ("0" + m) : m);
                    const style = (month.month_index === m && month.year === y) 
                        ? {
                            "backgroundColor": "lightyellow",
                            "borderRadius": "10px"
                        }
                        : null;
                    return (
                        <div key={idx} className="col">
                            {/*printMonth(month.month_index, month.weeks, style)*/}
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

YearCalendar.propTypes = {
    calendarData: PropTypes.shape({
        user: PropTypes.shape({
            id: PropTypes.number,
            fullName: PropTypes.string
        }),
        period: PropTypes.string,
        absences: PropTypes.objectOf(PropTypes.shape({
            from: PropTypes.date,
            to: PropTypes.date,
            length: PropTypes.number,
            type: PropTypes.string,
            validated: PropTypes.bool,
            halfday: PropTypes.bool,
            note: PropTypes.string
        })),
        jobs: PropTypes.objectOf(PropTypes.shape({
            week: PropTypes.string, 
            date: PropTypes.date,
            morning: PropTypes.bool,
            note: PropTypes.string,
            service: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                location: PropTypes.string
            }),
            works: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string
            })),
            updated: PropTypes.date
        }))
    })
}

YearCalendar.defaultProps = {
    calendarData: {
        user: {
            id: -1,
            fullName: "No Name"
        },
        period: "1970-01-01 - 1970-01-01",
        jobs: {},
        absences: {}
    }
}

export default YearCalendar;