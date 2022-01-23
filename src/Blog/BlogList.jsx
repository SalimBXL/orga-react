import React from "react";
import PropTypes from "prop-types";
import BlogListEntry from "./BlogListEntry";
import "./Blog.css";

const BlogList = ({articles}) => {

    if (articles.length < 1) return <p className="Blog-no-entry">No article found.</p>;

    const articlesList = articles.map((article) => (
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
        />)
    );

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
    }))
}

BlogList.defaultProps = {
    articles: []
}

export default BlogList;