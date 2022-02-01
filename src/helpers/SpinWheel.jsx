import React from "react";
import PropTypes from 'prop-types';

const SpinWheel = ({what}) => (
    <div className="Blog-spin">
        <div className="text-center">
            <div className="spinner-border" role="status" /> <br />
            <span>Loading {what}...</span>
        </div>
    </div>
);

SpinWheel.propTypes = {
    what: PropTypes.string
}

SpinWheel.defaultProps = {
    what: ""
}

export default SpinWheel;