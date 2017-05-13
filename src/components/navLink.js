import React, { PropTypes } from "react"
import { Link, IndexLink } from "react-router"

const propTypes = {
    link: PropTypes.object.isRequired,
}

const NavLink = ({ link }) => {
    if(link.url === "/") {
        return(
            <li>
                <IndexLink
                    to={link.url}
                    activeClassName="is-active"
                >
                    {link.name}
                </IndexLink>
            </li>
        )
    } else {
        return(
            <li>
                <Link
                    to={link.url}
                    activeClassName="is-active"
                >
                    {link.name}
                </Link>
            </li>
        )
    }
}

NavLink.propTypes = propTypes

export default NavLink
