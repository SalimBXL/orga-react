

//export const capitalize = ([first,...rest]) => {return first.toUpperCase() + rest.join('').toLowerCase()};
export const jobColor = (jobs) => "rgb(2, 117, 216)";

export const absenceColor = (absence) => {
    if (absence.toLowerCase() === "mi") return "rgb(240, 173, 78)";
    return "rgb(92, 184, 92)";
};