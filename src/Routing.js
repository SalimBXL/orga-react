import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Blog from "./Blog";

const Routing = () => {

    return (
        <Routes>
            <Route path="*" element={<h1><i className="bi-alarm text-success"/></h1>} />
            <Route path="/dashboard/:user_id" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:article_id" element={<Blog />} />
      </Routes>
    );
}

export default Routing;