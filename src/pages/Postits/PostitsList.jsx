import React from "react";
import PropTypes from "prop-types";
import PostitsListEntry from "./PostitsListEntry";
import "./Postits.css";

const PostitsList = ({postits, modalClick}) => {

    const handleModalClick = (entry) => {
        modalClick(entry);
    }

    if (postits.length < 1) return <p className="Blog-no-entry">No post-it found.</p>;

    return postits.map((postit) => (
            <PostitsListEntry
                key={postit.id}
                id={postit.id}
                title={postit.title}
                body={postit.body}
                isPrivate={postit.is_private}
                author={postit.user.fullname}
                modalClick={handleModalClick}
            />)
    );
};

PostitsList.propTypes = {
    postits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        date_created: PropTypes.string,
        date_modified: PropTypes.string,
        date_approuved: PropTypes.string,
        is_private: PropTypes.bool,
        title: PropTypes.string,
        body: PropTypes.string,
        user: PropTypes.object
    })).isRequired,
    modalClick: PropTypes.func.isRequired
}

PostitsList.defaultProps = {
    postits: []
}

export default PostitsList;