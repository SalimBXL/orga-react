import React from "react";
import PropTypes from "prop-types";
//import {  } from "../helpers";
import BlogListEntry from "./BlogListEntry";
import "./Blog.css";

const BlogList = ({articles}) => {
    return (articles.length < 1)
        ? <p className="Blog-article">No article found.</p>
        : articles.map((article) => {
            const [id, title, body, is_logbook, is_approuved] = article;
            const bgColor = (!is_logbook)
                ? "border-dark text-dark"
                : is_approuved
                    ? "border-success text-success"
                    : "border-danger text-danger"
            const style = (is_logbook && !is_approuved)
                ? {"fontFamily": "'Roboto', sans-serif"}
                : {}
            const iconToDisplay = is_logbook
                ? is_approuved
                    ? "bi bi-journal-check"
                    : "bi bi-exclamation-circle"
                : ""

            return (
                <BlogListEntry
                    id={id}
                    title={title}
                    body={body}
                    isLogBook={is_logbook}
                    isApprouved={is_approuved}
                    bgColor={bgColor}
                    style={style}
                    iconToDisplay={iconToDisplay}
                />
            )
        }
    )
};

BlogList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        date_created: PropTypes.string,
        date_modified: PropTypes.string,
        date_approuved: PropTypes.string,
        approuved_by: PropTypes.number,
        is_approuved: PropTypes.bool,
        is_logbook: PropTypes.bool,
        title: PropTypes.string,
        body: PropTypes.string
    }))
}

BlogList.defaultProps = {
    articles: []
}

export default BlogList;