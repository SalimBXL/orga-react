import React from "react";
import uuid from "react-uuid";
import PostIt from "./PostIt";
import postits from "../../data/postits.json";


const Postits = () => {

    return (
        <div className="Home-postits">

            {postits.postits.map((postit) =>
                <PostIt className="" key={uuid()}
                    title={postit.title} 
                    body={postit.body}
                    level={postit.level}
                    isPrivate={postit.private}
                    author={postit.user.fullname}
                />
            )}
            
        </div>
    );
}

export default Postits;