import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import PageLink from "./PageLink";
import { useParams } from "react-router-dom";
import "./Blog.css";

const Pagination = ({numberOfPages}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { page } = useParams();
    const buttons = [];

    useEffect(() => {
        setCurrentPage(prev => page ? Number(page) : 1);
    }, [page]);

    for (let n = 1; n <= numberOfPages; n++) { buttons.push(n); }

    return (
        <div className="Blog-pagination">
            <nav aria-label="Page navigation example">
                <ul className="pagination">

                    <PageLink 
                        key={uuid()}
                        numberOfPages={numberOfPages}
                        pageNumber={(currentPage-1)}
                        label="&laquo;"/>
                    
                    {buttons.map((btn, idx) => (
                        <PageLink 
                            key={uuid()}
                            numberOfPages={numberOfPages}
                            pageNumber={(idx+1)}
                            label={(idx+1).toString()}/>
                    ))}

                    <PageLink 
                        key={uuid()}
                        numberOfPages={numberOfPages}
                        pageNumber={(currentPage+1)}
                        label="&raquo;"/>

                </ul>
            </nav>
        </div>
    );
}

Pagination.propTypes = {
    numberOfPages: PropTypes.number
}

Pagination.defaultProps = {
    numberOfPages: 1
}

export default Pagination;