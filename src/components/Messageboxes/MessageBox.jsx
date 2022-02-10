import React from "react";
import PropTypes from 'prop-types';
import "./MessageBox.css";

const MessageBox = ({title, message}) => {

    return (
        <div className="card shadow-sm MessageBox">
            <h4 className="MessageBox-title">{title}</h4>
            <div className="MessageBox-message">{message}</div>
        </div>
    );
}

MessageBox.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
}

MessageBox.defaultProps = {
    title: "NO TITLE",
    message: "NO MESSAGE"
}

export default MessageBox;