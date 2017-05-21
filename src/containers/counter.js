import React       from "react"
import PropTypes   from "prop-types"
import { connect } from "react-redux"

import CSSModules from "react-css-modules"
import styles     from "./counter.sass"

import { incrementAction, decrementAction } from "../actions/counterActions"

const propTypes = {
  count:     PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const Counter = props => {
  return (
    <div className="has-text-centered">
      <h1 className="title">Counter example</h1>

      <div className="columns">
        <div className="column is-4 is-offset-4">
          <h2 className="title">{ props.count }</h2>

          <a
            className="button is-success"
            onClick={() => props.increment()}
            styleName="first-button"
          >
            <span className="icon is-small">
              <i className="fa fa-plus"></i>
            </span>
            <span>Increment</span>
          </a>

          <a
            className="button is-danger"
            onClick={() => props.decrement()}
          >
            <span className="icon is-small">
              <i className="fa fa-minus"></i>
            </span>
            <span>Decrement</span>
          </a>
        </div>
      </div>
    </div>
  )
}

Counter.propTypes    = propTypes

const mapState = state => ({
  count: state.counter.count,
})

const mapDispatch = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
})

const styled = CSSModules(Counter, styles)

export default connect(mapState, mapDispatch)(styled)
