import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Blog from "./Blog";

const Routing = () => {

    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/dashboard/:user_id" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/page=:page" element={<Blog />} />
        </Routes>
    );
}

export default Routing;