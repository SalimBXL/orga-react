import React, { useState, useEffect } from "react";
import SpinWheel from "../helpers/SpinWheel";
import axios from "axios";
import BlogList from "./BlogList";
import Pagination from "./Pagination";
import "./Blog.css";

import jsonData from "../data/blog.json";

//const API_URL = "127.0.0.1";


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
            <h1 className="text-capitalize">Blog</h1>
            {fetchingData 
                ? <SpinWheel />
                : <div>
                    <Pagination />
                    <BlogList articles={blogData.articles} />
                    <Pagination />
                </div>}
        </div>
    );
}

export default Blog;