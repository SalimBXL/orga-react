import React from "react";
import "./MessageBox.css";

const MessageBox = ({title, message}) => {

    return (
        <div className="card shadow-sm MessageBox">
            <h4 className="MessageBox-title">{title}</h4>
            <div className="MessageBox-message">{message}</div>
        </div>
    );
}

export default MessageBox;