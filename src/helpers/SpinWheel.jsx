import React from "react";
import PropTypes from 'prop-types';
import { API_CONSTANT } from "./helpers";

const SpinWheel = ({what, timeout}) => (
    <div className="Blog-spin">
        <div className="text-center">
            <div className="spinner-border" role="status" /> <br />
            <span>Loading {what}...</span>
        </div>
    </div>
);

SpinWheel.propTypes = {
    what: PropTypes.string,
    timeout: PropTypes.number
}

SpinWheel.defaultProps = {
    what: "",
    timeout: API_CONSTANT.TIMEOUT
}

export default SpinWheel;