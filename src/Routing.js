import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Postits from "./pages/Postits";

const Routing = () => {

    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/dashboard/:user_id" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/page=:page" element={<Blog />} />
            <Route path="/postits" element={<Postits />} />
        </Routes>
    );
}

export default Routing;