import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
//import {  } from "../helpers";
import axios from "axios";
import "./Blog.css";

import jsonData from "../data/blog.json";


//const API_URL = "127.0.0.1";
const ARTICLE_LIST_ITEM_LENGTH = 50;

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

    const RenderArticleList = () => {
        return (blogData.articles 
            ? blogData.articles.map((article) => {
                const bgColor = (!article.is_logbook)
                    ? "border-dark text-dark"
                    : article.is_approuved
                        ? "border-success text-success"
                        : "border-danger text-danger"
                const style = (article.is_logbook && !article.is_approuved)
                    ? {"fontFamily": "'Roboto', sans-serif"}
                    : {}
                const iconToDisplay = (article.is_logbook)
                    ? article.is_approuved
                        ? "bi bi-journal-check"
                        : "bi bi-exclamation-circle"
                    : ""

                return (
                    <div    key={article.id} 
                            className={`card ${bgColor} mb-3`}
                            style={{style}}
                    >
                        <div className="card-header Blog-entry-title">
                            <h5 className="card-title">{article.title}</h5>
                            {article.is_logbook && 
                                <span class={article.is_approuved
                                    ? "badge bg-success"
                                    : "badge bg-danger"
                                    }
                                ><i className={iconToDisplay} /></span>
                            }
                        </div>
                        <div className="card-body">
                            <p className="card-text Blog-entry-text">
                                {article.body.length > ARTICLE_LIST_ITEM_LENGTH 
                                    ? `${article.body.slice(0, ARTICLE_LIST_ITEM_LENGTH)}...`
                                    : article.body
                                }
                            </p>
                        </div>
                    </div>
                )})
            : <p className="Blog-article">No article found.</p>
        )
    };
    

    return (<div className="Blog">
        
        <h1 className="Blog-title text-capitalize">Blog</h1>

        {fetchingData 
            ? <SpinWheel />
            : blogData && <RenderArticleList />
        }

    </div>);
}

export default Blog;