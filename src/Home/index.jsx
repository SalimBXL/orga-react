import React from "react";
import PostIt from "./PostIt";
import "./Home.css";

const Home = () => {

    return (
    <div className="Home">
        
        <div className="Home-main">

            <div className="card shadow Home-messages">
                <h4>Messages</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
            </div>

            <div className="card shadow Home-jobs">
                <h4>Jobs of the day</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
            </div>
        </div>

        <div className="Home-shortcuts">

            <div className="btn-group shadow" role="group" aria-label="Basic outlined example">

                <button type="button" className="btn btn-group-lg btn-outline-secondary"
                    data-bs-toggle="tooltip" title="Today">
                    <i className="bi bi-calendar-day fs-1"/>
                </button>

                <button type="button" className="btn btn-group-lg btn-outline-secondary"
                    data-bs-toggle="tooltip" title="This Week">
                    <i className="bi bi-calendar-week fs-1" />
                </button>

                <button type="button" className="btn btn-group-lg btn-outline-secondary"
                    data-bs-toggle="tooltip" title="This Month">
                <i className="bi bi-calendar-month fs-1" />
                </button>
            </div>
        </div>

        <div className="Home-postits">
            <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla. Reblablabal. Etc etc."} level={4}/>
            <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={3}/>
            <PostIt className="" title={"Mon Titre"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} level={0}/>
            <PostIt className="" title={"Mon Titre"} body={"A123456789B123456789C123456789D123456789"} level={0}/>
            <PostIt className="" title={"Mon Titre"} body={"A123456789B123456789C123456789D123456789"} level={0}/>
            <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={2}/>
            <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={1}/>
            <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={1}/>
        </div>

        

    </div>);
}

export default Home;