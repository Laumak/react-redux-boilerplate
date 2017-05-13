// @flow

type Actions = {
  increment: Function,
  decrement: Function,
}

type CounterType = {
  count: number,
}

import React from "react"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as DemoActions from "../actions/counterActions"

class Counter extends React.Component {
  props: {
    actions: Actions,
    counter: CounterType,
  }

  increment = () => this.props.actions.increment()
  decrement = () => this.props.actions.decrement()

  render() {
    const inlineButtonStyle = {
      marginRight: 10,
      marginLeft: 10,
    }

    return (
      <div className="has-text-centered">
        <h1 className="title">Counter example</h1>

        <div className="columns">
          <div className="column is-4 is-offset-4">
            <h2 className="title">{ this.props.counter.count }</h2>

            <a
              className="button is-success"
              onClick={() => this.increment()}
              style={inlineButtonStyle}
            >
              <span className="icon is-small">
                <i className="fa fa-plus"></i>
              </span>
              <span>Increment</span>
            </a>

            <a
              className="button is-danger"
              onClick={() => this.decrement()}
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
}

const mapStateToProps = (state: Object) => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(DemoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
