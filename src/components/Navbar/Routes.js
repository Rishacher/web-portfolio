import React from "react";
import { NavLink } from "react-router-dom";
function Dropdown(props) {
    return (
        <React.Fragment>
            <NavLink activeClassName="active" to="/home">
                <div className="navs">Home</div>
            </NavLink>
            <NavLink to="/education" activeClassName="active">
                <div className="navs">Education</div>
            </NavLink>
            <NavLink to="/certifications" activeClassName="active">
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
                <div className="navs">Projects</div>
            </NavLink>
        </React.Fragment>
    )
}
export default Dropdown;