import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";

const Nav = () => {
    return (
        <div className="tabs is-centered">
            <ul>
                <li><IndexLink to="/" activeClassName="is-active">Home</IndexLink></li>
                <li><Link to="/counter" activeClassName="is-active">Counter</Link></li>
            </ul>
        </div>
    );
};

export default Nav;