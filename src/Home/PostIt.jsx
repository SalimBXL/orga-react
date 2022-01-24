import React from "react";
import "./PostIt.css";

const PostIt = ({title, body, level}) => {
    const bg = (level === 4)
        ? "bg-danger"               // URGENT
        : (level === 3)
            ? "bg-warning"          // ASAP
            : (level === 2)
                ? "bg-info"         // Taken
                :(level === 0)
                ? "bg-light"                // Normal
                : "bg-secondary";   // Done

    return (
        <div className="card shadow PostIt">

            <h6 className="fw-bolder p-2">
                {title}
                <span
                    className={`position-absolute top-0 start-100 translate-middle p-2 ${bg} 
                                border border-secondary rounded-circle shadow`}>
                    <span className="visually-hidden" style={{border: "1px solid black"}}>New alerts</span>
                </span>
            </h6>

            <p className="font-monospace p-2 PostIt-body" >
                {body.slice(0, 35)}
            </p>

            <p className="text-secondary text-end fs-6 p-2 PostIt-footer" >Blabla</p>
        </div>
    );
}

export default PostIt;