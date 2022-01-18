import React from "react";

/*
    Colors for jobs and absences related to code
*/

export const jobColor = (jobs) => "rgb(2, 117, 216)";

export const absenceColor = (absence) => {
    if (absence.toLowerCase() === "mi") return "rgb(240, 173, 78)";
    return "rgb(92, 184, 92)";
};



/*
    Date and Time helpers
*/
export const getDateYMDFormated = (date = new Date()) => `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

export const getDateAndTimeFormated = (date = new Date()) => `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours}:${date.getMinutes}:${date.getSeconds}`;

export const MONTHNAME = {
    1: "january", 2: "february", 3: "march", 4: "april", 5: "may", 6: "june", 
    7: "july", 8: "august", 9: "september", 10: "october", 11: "november", 12: "december"
};