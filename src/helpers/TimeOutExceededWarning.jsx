import React from "react";
import { API_CONSTANT } from "./helpers";
import PropTypes from 'prop-types';

const TimeOutExceededWarning = ({errors}) => {
    return (
      <div style={{padding: "1em 2em"}}>
        <h1 style={{padding: "1em 0"}}>Timeout exceeded!</h1>
        <h3>Impossible to contact API server</h3>
        <p>
          API Server did not respond at <code>{API_CONSTANT.BASE_URL}</code>
        </p>
        <p>
          <code>
            {errors}
          </code>
        </p>
      </div>
    );
}

TimeOutExceededWarning.propTypes = {
  errors: PropTypes.string
}

TimeOutExceededWarning.defaultProps = {
  errors: ""
}

export default TimeOutExceededWarning;