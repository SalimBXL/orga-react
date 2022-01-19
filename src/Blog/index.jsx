import React, { useState, useEffect } from "react";
//import {  } from "../helpers";
import axios from "axios";
import BlogList from "./BlogList";
import "./Blog.css";

import jsonData from "../data/blog.json";

//const API_URL = "127.0.0.1";

const SpinWheel = () => 
    <div className="Blog-spin">
        <div className="text-center">
            <div className="spinner-border" role="status" /> <br />
            <span>Loading...</span>
        </div>
    </div>


const Blog = () => {
    const [fetchingData, setFetchingData] = useState(false);
    const [blogData, setBlogData] = useState([]);

    async function getBlogData() {
        setFetchingData(true);
        //const data = await axios.get(API_URL);
        const data = jsonData;
        setBlogData((prev) => {
            setFetchingData(false);
            return data;
        });
    }

    useEffect(() => {
        getBlogData();
    }, []);

    return (
        <div className="Blog">
            <h1 className="Blog-title text-capitalize">Blog</h1>
            {fetchingData ? <SpinWheel /> : <BlogList articles={blogData.articles} />}
        </div>
    );
}

export default Blog;