import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

const Routing = () => {
    
    return (
        <Routes>
            <Route path="*" element={<h1><i className="bi-alarm"/></h1>} />
            <Route path="/dogs" element={() => <h1>TEST</h1>} />
            <Route path="/dogs/:name" element={() => <h1>TEST</h1>} />
      </Routes>
    );
}

export default Routing;