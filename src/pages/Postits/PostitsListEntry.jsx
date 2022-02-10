import React from "react";
import PropTypes from "prop-types";
import "./Postits.css";

const ARTICLE_LIST_ITEM_LENGTH = 60;

const PostitsListEntry = ({id, title, body, 
                        isPrivate, dates, 
                        author, modalClick}) => {
    
    const style = {
        backgroundColor: isPrivate ? "pink" : "yellow"
    };

    const handleModalClick = () => {
        modalClick({
            id: id,
            title: title,
            body: body
        });
    }
        
    return (
        <>
        <div key={id} className={`card mb-3`} style={{style}}>

            <div className="card-header Blog-entry" >

                <h5 className="card-title Blog-entry-title" >{title}</h5>
                <div className="Blog-entry-title-buttons">
                    <button 
                        onClick={handleModalClick}
                        type="button" 
                        className="Blog-entry-title-button 
                                        btn btn-sm 
                                        btn-outline-secondary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal">
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
                <p className="Blog-entry-misc">
                    Created: {dates.created} - Modified: {dates.modified}
                </p>
            </div>
        </div>
        </>
    )
};

PostitsListEntry.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired, 
    body: PropTypes.string.isRequired,
    isLogBook: PropTypes.bool,
    isApprouved: PropTypes.bool,
    dates: PropTypes.shape({
        created: PropTypes.string,
        modified: PropTypes.string,
        approuved: PropTypes.string
    }),
    approuvedBy: PropTypes.number
}

PostitsListEntry.defaultProps = {
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

export default PostitsListEntry;