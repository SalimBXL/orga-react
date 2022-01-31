import React from "react";
import Messageboxes from "./Messageboxes";
import Shortcuts from "./Shortcuts";
import Postits from "./Postits";
import "./Home.css";

const Home = () => {

    return (
    <div className="Home">

        <Messageboxes />

        <Shortcuts />

        <Postits /> 

    </div>);
}

export default Home;