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
        <div className="card shadow PostIt" onClick={() => { alert("TODO");}}>

            <h6 className="fw-bolder PostIt-header">
                {title}
                <span
                    className={`position-absolute top-0 start-100 translate-middle p-2 ${bg} 
                                border border-secondary rounded-circle shadow`}>
                    <span className="visually-hidden" style={{border: "1px solid black"}}>New alerts</span>
                </span>
            </h6>

            <p className="font-monospace PostIt-body" >
                {body}
            </p>

            <p className="text-secondary text-end PostIt-footer" >Blabla</p>
        </div>
    );
}

export default PostIt;