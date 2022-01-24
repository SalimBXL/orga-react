import React from "react";
import PostIt from "./PostIt";
import "./Home.css";

const Home = () => {

    return (<div className="container-fluid">
        <h1>Home</h1>

        <div className="Home">
            <div className="gap-3 Home-main">
                MAIN
            </div>

            <div className="row align-items-end gap-3 Home-postits">
                <PostIt className="col" title={"Mon Titre"} body={"Mon texte. Blablabla. Reblablabal. Etc etc."} level={4}/>
                <PostIt className="col" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={3}/>
                <PostIt className="col" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={2}/>
                <PostIt className="col" title={"Mon Titre"} body={"A123456789B123456789C123456789D123456789"} level={0}/>
                <PostIt className="col" title={"Mon Titre"} body={"A123456789B123456789C123456789D123456789"} level={0}/>
                <PostIt className="col" title={"Mon Titre"} body={"A123456789B123456789C123456789D123456789"} level={0}/>
                <PostIt className="col" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={1}/>
                <PostIt className="col" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={1}/>
            </div>
        </div>
    </div>);
}

export default Home;