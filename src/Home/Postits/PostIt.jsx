import React from "react";
import PropTypes from 'prop-types';
import "./PostIt.css";

const PostIt = ({title, body, level, isPrivate, author}) => {

    const LEVEL = {
        0: "Normal",
        1: "Done", 
        2: "Taken",
        3: "As Soon As Possible",
        4: "URGENT"
    }

    const bg = (level === 4)
        ? "bg-danger"               // URGENT
        : (level === 3)
            ? "bg-warning"          // ASAP
            : (level === 2)
                ? "bg-info"         // Taken
                :(level === 0)
                ? "bg-light"        // Normal
                : "bg-secondary";   // Done
    
    const cl = "card shadow PostIt " + (isPrivate && "PostIt-private")

    return (
        <div className={cl} onClick={() => { alert("TODO");}}>

            <h6 className="fw-bolder PostIt-header">
                {title}
                <span data-bs-toggle="tooltip" title={LEVEL[level]}
                    className={`position-absolute top-0 start-100 translate-middle p-2 ${bg} 
                                border border-secondary rounded-circle shadow`}>
                    <span className="visually-hidden" style={{border: "1px solid black"}}>New alerts</span>
                </span>
            </h6>

            <p className="font-monospace PostIt-body" >
                {body}
            </p>

            <p className="text-secondary text-end PostIt-footer" >
                {author}
            </p>
        </div>
    );
}

PostIt.propTypes = {
    title: PropTypes.string, 
    body: PropTypes.string, 
    level: PropTypes.oneOf(0, 1, 2, 3, 4),
    isPrivate: PropTypes.bool, 
    author: PropTypes.string
}

PostIt.defaultProps = {
    title: "[No TITLE]", 
    body: "[NO TEXT]", 
    level: 0, 
    isPrivate: true, 
    author: "YOU!"
}

export default PostIt;