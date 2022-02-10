import React from "react";
import Messageboxes from "../../components/Messageboxes";
import Shortcuts from "../../components/Shortcuts";
import Postits from "../../components/Postits";
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