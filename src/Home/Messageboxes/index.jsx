import React from "react";
import MessageBox from "./MessageBox";
import { getDateLongStyleFormated } from "../../helpers/helpers";

const Messageboxes = () => {

    return (
        <div className="card shadow-sm" style={{width: "100%", textAlign: "left", borderRadius: "10px"}}>
            
            <h6 className="card-header">{getDateLongStyleFormated()}</h6>
            
            <div className="card-body Home-main">
                
                <MessageBox title="Messages" message="Lorem ipsum " />
                
                <MessageBox title="Messages" message="test" />
            </div>
        </div>
    );
}

export default Messageboxes;