import React from "react";
import "./Blog.css";

const ARTICLE_LIST_ITEM_LENGTH = 60;

const BlogListEntry = ({id, title, body, isLogBook, isApprouved, bgColor, style, iconToDisplay, dates, approuvedBy}) => {
    

    return (
        <>
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {title}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div className="modal-body">
                    {body}
                </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div key={id} className={`card ${bgColor} mb-3`} style={{style}}>

            <div className="card-header Blog-entry-title" >
                <h5 className="card-title"  >
                    {title}
                </h5>
                <div className="Blog-entry-title-buttons">
                    {isLogBook && 
                        <button type="button" disabled className={isApprouved ? "Blog-entry-title-button btn btn-sm btn-success" : "Blog-entry-title-button btn btn-sm btn-danger"}>
                            <i className={iconToDisplay} />
                        </button>
                    }
                    <button type="button" className="Blog-entry-title-button btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-eye" />
                    </button>
                </div>
            </div>

            <div className="card-body">
                <p className="card-text Blog-entry-text">
                    {body.length > ARTICLE_LIST_ITEM_LENGTH 
                        ? `${body.slice(0, ARTICLE_LIST_ITEM_LENGTH)}...`
                        : body
                    }
                </p>
                {isApprouved && 
                    <p className="Blog-entry-misc text-success">
                        Approuved: {dates.approuved} by {approuvedBy}
                    </p>
                }
                {(isLogBook && !isApprouved) &&
                    <p className="Blog-entry-misc text-danger">
                        Not yet approuved
                    </p>
                }
                <p className="Blog-entry-misc">
                    Created: {dates.created} - Modified: {dates.modified}
                </p>
            </div>
        </div>
        </>
    )
};

export default BlogListEntry;