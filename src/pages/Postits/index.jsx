import React, { useState, useEffect } from "react";
import SpinWheel from "../../helpers/SpinWheel";
import axios from "axios";
import PostitsList from "./PostitsList";
import Pagination from "./Pagination";
import ModalBox from "./ModalBox";
import { API_CONSTANT } from "../../helpers/helpers";
import "./Postits.css";


const Blog = () => {
    const [currentModalEntry, setCurrentModalEntry] = useState({id: null, title: null, body:  null});
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

    const handleModalClick = (entry) => {
        setCurrentModalEntry(prev => entry);
    }

    return (
        <>
        <ModalBox entry={currentModalEntry} />

        <div className="Blog">
            <div className="card shadow-sm m-2 p-1" style={{backgroundColor: "whitesmoke"}}>
                <h1 className="text-capitalize text-dark">
                    <i className="bi bi-journals"></i> Post-Its
                </h1>
            </div>
            {fetchingPostitsData 
                ? <SpinWheel />
                : <div>
                    <Pagination />
                    <PostitsList postits={postitsData} modalClick={handleModalClick} />
                    <Pagination />
                </div>}
        </div>
        </>
    );
}

export default Blog;