import React from "react"
import PropTypes from "prop-types"

import NavLink from "./navLink"

const propTypes = {
  links: PropTypes.array.isRequired,
}

const Nav = ({ links }) => (
  <div className="tabs is-centered">
    <ul>
      { links.map(link => <NavLink link={link} key={link.name} />) }
    </ul>
  </div>
)

Nav.propTypes = propTypes

export default Nav
