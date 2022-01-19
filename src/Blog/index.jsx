import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
//import {  } from "../helpers";
import axios from "axios";
import BlogList from "./BlogList";
import "./Blog.css";

import jsonData from "../data/blog.json";

//const API_URL = "127.0.0.1";

const SpinWheel = () => <h1>LOADING...</h1>;

const Blog = () => {
    const [fetchingData, setFetchingData] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const [articleID, setArticleID] = useState(null);

    const { article_id } = useParams();

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
        setArticleID(prev => {
            if (article_id) return article_id;
        });
    }, [article_id]);

    useEffect(() => {
        getBlogData();
    }, []);

    return (<div className="Blog">
        <h1 className="Blog-title text-capitalize">Blog</h1>
        {fetchingData 
            ? <SpinWheel />
            : blogData && <BlogList articles={blogData.articles} />
        }
    </div>);
}

export default Blog;