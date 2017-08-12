import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
}

const Title = props => {
  const StyledTitle = styled[props.type]``

  return (
    <StyledTitle className="title">
      { props.children }
    </StyledTitle>
  )
}

Title.propTypes = propTypes

export default Title
