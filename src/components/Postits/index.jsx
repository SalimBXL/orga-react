import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import axios from "axios";
import SpinWheel from "../../helpers/SpinWheel";
import PostIt from "./PostIt";
import { API_CONSTANT } from "../../helpers/helpers";


const Postits = () => {
    const [fetchingPostitsData, setFetchingPostitsData] = useState(false);
    const [postitsData, setPostitsData] = useState([]);

    async function getPostitsData() {    
        setFetchingPostitsData(true);
        let data = {};
        const api_url = API_CONSTANT.BASE_URL + "/postits";
        try {
            data = await axios({
                method: 'get',
                url: api_url,
                params: {
                    page: 1,
                    per_page: 20
                },
                timeout: API_CONSTANT.TIMEOUT
            });
        } catch (err) {
            console.log(err);
        }
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
                        isPrivate={postit.is_private}
                        author={postit.user.fullname}
                    />
                )
            }
        </div>
    );
}

export default Postits;