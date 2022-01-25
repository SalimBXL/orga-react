
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

export const getDateLongStyleFormated = (date = new Date()) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //return date.toLocaleDateString("en-US", options);
    return date.toLocaleDateString("en-US", options);
}

export const getDateYMDFormated = (date = new Date()) => {
    const y = date.getFullYear();
    const m = (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
    const d = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    return `${y}-${m}-${d}`;
};

export const getDateAndTimeFormated = (date = new Date()) => {
    const dt = getDateYMDFormated(date);
    const h = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
    const m = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
    const s = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds(); 
    return `${dt} ${h}:${m}:${s}`;
};

export const getMonday = (date = new Date()) => {
    const y = date.getFullYear();
    const m = (date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
    let d = date.getDate() - date.getDay() + 1;
    d = d < 10 ? "0"+d : d;
    return `${y}-${m}-${d}`;
}

export const MONTHNAME = {
    1: "january", 2: "february", 3: "march", 4: "april", 5: "may", 6: "june", 
    7: "july", 8: "august", 9: "september", 10: "october", 11: "november", 12: "december"
};