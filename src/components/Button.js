import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  theme: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.node,
  onClick: PropTypes.func,
}

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} button is-${props.theme}`}
    >
      {
        props.iconLeft &&
          <span className="icon is-small">
            <i className={`fa fa-${props.iconLeft}`}></i>
          </span>
      }

      <span>{props.children}</span>

        {
          props.iconRight &&
            <span className="icon is-small">
              <i className={`fa fa-${props.iconRight}`}></i>
            </span>
        }
    </button>
  )
}

Button.propTypes = propTypes

export default Button
