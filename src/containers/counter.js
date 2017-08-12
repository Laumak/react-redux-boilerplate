import React       from "react"
import PropTypes   from "prop-types"
import { connect } from "react-redux"
import styled      from "styled-components"

import Title  from "../components/Title"
import Button from "../components/Button"

import { incrementAction, decrementAction } from "../actions/counterActions"

const propTypes = {
  count:     PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const FirstButton = styled(Button)`
  margin-right: 10px;
`

const Counter = props => {
  return (
    <div className="has-text-centered">
      <Title type="h1">Redux Counter Example</Title>

      <div className="columns">
        <div className="column is-4 is-offset-4">
          <Title type="h2">{ props.count }</Title>

          <FirstButton
            theme="success"
            onClick={() => props.increment()}
            iconLeft="plus"
          >
            Increment
          </FirstButton>

          <Button
            theme="danger"
            onClick={() => props.decrement()}
            iconRight="minus"
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  )
}

Counter.propTypes = propTypes

const mapState = state => ({
  count: state.counter.count,
})

const mapDispatch = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
})

export default connect(mapState, mapDispatch)(Counter)
