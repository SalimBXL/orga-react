import React from "react";
import "./Blog.css";

const ARTICLE_LIST_ITEM_LENGTH = 60;

const BlogListEntry = ({id, title, body, isLogBook, isApprouved, bgColor, style, iconToDisplay}) =>
    (<div    key={id} 
            className={`card ${bgColor} mb-3`}
            style={{style}}
    >
        <div className="card-header Blog-entry-title">
            <h5 className="card-title">{title}</h5>
            {isLogBook && <span class={isApprouved
                    ? "badge bg-success"
                    : "badge bg-danger"
                }>
                    <i className={iconToDisplay} />
                </span>
            }
        </div>
        <div className="card-body">
            <p className="card-text Blog-entry-text">
                {body.length > ARTICLE_LIST_ITEM_LENGTH 
                    ? `${body.slice(0, ARTICLE_LIST_ITEM_LENGTH)}...`
                    : body
                }
            </p>
        </div>
    </div>
);

export default BlogListEntry;