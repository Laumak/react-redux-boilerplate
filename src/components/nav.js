import React, { PropTypes } from "react";

import NavLink from "./navLink";

const propTypes = {
    links: PropTypes.array.isRequired,
};

const Nav = ({ links }) => {
    return (
        <div className="tabs is-centered">
            <ul>
                { links.map((link) => <NavLink link={link} />) }
            </ul>
        </div>
    );
};

Nav.propTypes = propTypes;

export default Nav;
