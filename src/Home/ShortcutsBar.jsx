import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ShortcutsBar = ({typeColor, actions}) => {
    return (
        <div className="btn-group" role="group" style={{margin: "1em"}}>
            {actions.map((item, idx) => {
                const {icon, link, label} = item;
                const _icon = icon + " fs-1";
                const key="btn-"+label+"-"+idx;
                return (
                    <Link to={link} >
                    <button key={key} type="button" className={`btn btn-group-lg btn-outline-${typeColor}`}
                        data-bs-toggle="tooltip" title={label}>
                        <i className={_icon} />
                    </button>
                    </Link>
                )
            })}
        </div>
    );
};

ShortcutsBar.propTypes = {
    typeColor: PropTypes.string,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            "icon": PropTypes.string,
            "link": PropTypes.string,
            "label": PropTypes.string
        })
    )
}

ShortcutsBar.defaultProps = {
    typeColor: "secondary",
    actions: [
        {
            "icon": "bi bi-emoji-smile",
            "action": "#",
            "label": "Smile"
        }
    ]
}

export default ShortcutsBar;