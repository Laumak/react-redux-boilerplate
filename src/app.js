import React, { PropTypes } from "react"
import "./styles/app.scss"
import "../node_modules/font-awesome/css/font-awesome.css"

import Nav from "./components/nav"

const links = [
  {
    url: "/",
    name: "Home",
  }, {
    url: "/counter",
    name: "Counter",
  },
]

const propTypes = {
  children: PropTypes.any.isRequired,
}

const App = props => (
  <section className="section">
    <div className="container">
      <Nav links={links} />

      {props.children}
    </div>
  </section>
)

App.propTypes = propTypes

export default App
