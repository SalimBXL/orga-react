import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Blog.css";

const PageLink = ({pageNumber, label, numberOfPages}) => {
    if (pageNumber<1) pageNumber = 1;
    if (pageNumber>numberOfPages) pageNumber = numberOfPages;
    return (
        <li className="page-item">
            <Link className="page-link text-uppercase text-secondary" aria-label={label}
                to={`/blog/page=${pageNumber}`} >
                {label}
            </Link>
        </li>
    )
};

PageLink.propTypes = {
    pageNumber: PropTypes.number,
    label: PropTypes.string,
    numberOfPages: PropTypes.number
}

PageLink.defaultProps = {
    pageNumber: 1,
    label: "?",
    numberOfPages: 1
}

export default PageLink;