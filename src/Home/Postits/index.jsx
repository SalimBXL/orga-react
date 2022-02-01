import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import axios from "axios";
import SpinWheel from "../../helpers/SpinWheel";
import PostIt from "./PostIt";

const API_URL = "http://164.15.145.247:3000/v1/postits";

const Postits = () => {
    const [fetchingPostitsData, setFetchingPostitsData] = useState(false);
    const [postitsData, setPostitsData] = useState([]);

    async function getPostitsData() {    
        setFetchingPostitsData(true);
        const data = await axios({
            method: 'get',
            url: API_URL,
            params: {
                page: 1,
                per_page: 20
            }
        });
        setPostitsData((prev) => {
            setFetchingPostitsData(false);
            return data.data;
        });
    }

    useEffect(() => {
        getPostitsData();
    }, []);


    return (
        <div className="Home-postits">

            {fetchingPostitsData 
                ? <SpinWheel what="Post-its" />
                : postitsData && postitsData.map((postit) =>
                    <PostIt className="" key={uuid()}
                        title={postit.title} 
                        body={postit.body}
                        level={postit.level}
                        isPrivate={postit.private}
                        author={postit.user.fullname}
                    />
                )
            }
        </div>
    );
}

export default Postits;