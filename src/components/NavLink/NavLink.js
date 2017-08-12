import React from "react"
import PropTypes from "prop-types"

import { NavLink as RouterNavLink } from "react-router-dom"

const propTypes = {
  link: PropTypes.object.isRequired,
}

const NavLink = ({ link }) => (
  <li>
    <RouterNavLink to={link.url} exact activeClassName="is-active">
      {link.name}
    </RouterNavLink>
  </li>
)

NavLink.propTypes = propTypes

export default NavLink
