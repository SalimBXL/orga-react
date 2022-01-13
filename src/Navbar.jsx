import React from "react";
import { Link, NavLink } from "react-router-dom";

const APP_TITLE = "orga";
const LINKS = {
    dashboard: "/dashboard/7"
};
/*
const NavBarOffCanvas = ({items}) => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid">
            <Link className="navbar-brand text-capitalize" to="/">{APP_TITLE}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header bg-dark">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> </h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                </div>
                <div className="offcanvas-body bg-dark">{items}</div>
            </div>
        </div>
    </nav>
);
*/
const NavBar = ({items}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <Link className="navbar-brand text-capitalize" to="/">{APP_TITLE}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {items}
            </div>
        </div>
    </nav>
);



const Navbar = () => {
    const menu = () => (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li key="home" className="nav-item">
                <NavLink to={"/"} className="nav-link text-capitalize" end>
                    Home
                </NavLink>
            </li>
            {Object.entries(LINKS).map(([name, link], idx) => 
                <li key={idx} className="nav-item">
                    <NavLink to={link} className="nav-link text-capitalize">
                        {name}
                    </NavLink>
                </li>)
            }
        </ul>
    );
    
    return <NavBar items={menu()} />;
}

export default Navbar;