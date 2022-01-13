import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";

const Routing = () => {
    
    return (
        <Routes>
            <Route path="*" element={<h1><i className="bi-alarm text-success"/></h1>} />
            <Route path="/dashboard/:user_id" element={<Dashboard />} />
            <Route path="/dogs/:name" element={<h1>TEST</h1>} />
      </Routes>
    );
}

export default Routing;