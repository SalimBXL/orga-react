import React from "react";
import PropTypes from "prop-types";
import "./Blog.css";

const ARTICLE_LIST_ITEM_LENGTH = 60;

const BlogListEntry = ({id, title, body, isLogBook, isApprouved, dates, approuvedBy}) => {
    
    const bgColor = (!isLogBook)
        ? "border-dark text-dark"
        : isApprouved
            ? "border-success text-success"
            : "border-danger text-danger";
    const style = (isLogBook && !isApprouved)
        ? {"fontFamily": "'Roboto', sans-serif"}
        : {};
    const iconToDisplay = isLogBook
        ? isApprouved
            ? "bi bi-journal-check"
            : "bi bi-exclamation-circle"
        : "";
        
    return (
        <div key={id} className={`card ${bgColor} mb-3`} style={{style}}>

            <div className="card-header Blog-entry" >

                <h5 className="card-title Blog-entry-title" >{title}</h5>
                <div className="Blog-entry-title-buttons">
                    {isLogBook && <button 
                        type="button" disabled 
                        className={isApprouved 
                            ? "Blog-entry-title-button btn btn-sm btn-success" 
                            : "Blog-entry-title-button btn btn-sm btn-danger"
                        }>
                            <i className={iconToDisplay} />
                        </button>
                    }
                    <button type="button" 
                            className="modal-btn modal-trigger Blog-entry-title-button btn btn-sm btn-outline-secondary"
                    >
                        <i className="bi bi-eye" />
                    </button>
                </div>
            </div>

            <div className="card-body Blog-entry-text">
                <p className="card-text">
                    {body.length > ARTICLE_LIST_ITEM_LENGTH 
                        ? `${body.slice(0, ARTICLE_LIST_ITEM_LENGTH)}...`
                        : body
                    }
                </p>
                {isApprouved && 
                    <p className="Blog-entry-misc-logbook text-success">
                        Approuved: {dates.approuved} by {approuvedBy}
                    </p>
                }
                {(isLogBook && !isApprouved) &&
                    <p className="Blog-entry-misc-logbook text-danger">
                        Not yet approuved
                    </p>
                }
                <p className="Blog-entry-misc">
                    Created: {dates.created} - Modified: {dates.modified}
                </p>
            </div>
        </div>
    )
};

BlogListEntry.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string, 
    body: PropTypes.string,
    isLogBook: PropTypes.bool,
    isApprouved: PropTypes.bool,
    dates: PropTypes.shape({
        created: PropTypes.string,
        modified: PropTypes.string,
        approuved: PropTypes.string
    }),
    approuvedBy: PropTypes.number
}

BlogListEntry.defaultProps = {
    id: null,
    title: "",
    body: "",
    isLogBook: false,
    isApprouved: false,
    dates: {
        created: "",
        modified: "",
        approuved: ""
    },
    approuvedBy: null
}

export default BlogListEntry;