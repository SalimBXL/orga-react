import React from "react";
import uuid from "react-uuid";
import MessageBox from "./MessageBox";
import ShortcutsBar from "./ShortcutsBar";
import PostIt from "./PostIt";
import "./Home.css";

const Home = () => {

    return (
    <div className="Home">

        <div className="Home-main">

            <MessageBox title="Messages" 
                        message="Lorem ipsum " />

            <MessageBox title="Messages" 
                        message="test" />

        </div>


        <div className="Home-shortcuts shadow-sm">

            <ShortcutsBar key={uuid()} typeColor="primary" actions={
                [{
                    icon: "bi bi-calendar-day",
                    link: "#",
                    label: "Today"
                },
                {
                    icon: "bi bi-calendar-week",
                    link: "#",
                    label: "This Week"
                },
                {
                    icon: "bi bi-calendar3",
                    link: "#",
                    label: "This Month"
                }]}
            />

            <ShortcutsBar key={uuid()} typeColor="success" actions={
                [{
                    icon: "bi bi-bandaid",
                    link: "#",
                    label: "Absences"
                },
                {
                    icon: "bi bi-calendar-check",
                    link: "#",
                    label: "Events"
                },
                {
                    icon: "bi bi-calendar-x",
                    link: "#",
                    label: "Days Off"
                },
                {
                    icon: "bi bi-grid-3x3",
                    link: "#",
                    label: "Grid"
                }]}
            />

            <ShortcutsBar key={uuid()} typeColor="dark" actions={
                [{
                    icon: "bi bi-grid-3x2-gap",
                    link: "#",
                    label: "Dashboard"
                },
                {
                    icon: "bi bi-journals",
                    link: "#",
                    label: "Blog"
                }]}
            />

        </div>


        <div >
            {/* A faire */}
            <div className="Home-postits">
                <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla. Reblablabal. Etc etc."} level={4}/>
                <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={3}/>
                <PostIt className="" title={"Mon Titre"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} level={0}/>
                <PostIt className="" title={"Mon Titre"} body={"A123456789B123456789C123456789D123456789"} level={0}/>
                <PostIt className="" title={"Mon Titre"} body={"A123456789B123456789C123456789D123456789"} level={0}/>
            </div>

            {/* En cours ou terminés */}
            <div className="Home-postits">
                <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={2}/>
                <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={1}/>
                <PostIt className="" title={"Mon Titre"} body={"Mon texte. Blablabla."} level={1}/>
            </div>
        </div>

        

    </div>);
}

export default Home;