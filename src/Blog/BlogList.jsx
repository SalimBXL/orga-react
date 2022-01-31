import React from "react";
import PropTypes from "prop-types";
import BlogListEntry from "./BlogListEntry";
import "./Blog.css";

const BlogList = ({articles, modalClick}) => {

    const handleModalClick = (entry) => {
        modalClick(entry);
    }

    if (articles.length < 1) return <p className="Blog-no-entry">No article found.</p>;

    return articles.map((article) => (
            <BlogListEntry
                key={article.id}
                id={article.id}
                title={article.title}
                body={article.body}
                isLogBook={article.is_logbook}
                isApprouved={article.is_approuved}
                dates={{
                    "created": article.date_created,
                    "modified": article.date_modified,
                    "approuved": article.date_approuved
                }}
                approuvedBy={article.approuved_by}
                modalClick={handleModalClick}
            />)
    );
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
    })).isRequired,
    modalClick: PropTypes.func.isRequired
}

BlogList.defaultProps = {
    articles: []
}

export default BlogList;