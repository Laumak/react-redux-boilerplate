import React from "react"
import { Route } from "react-router-dom"
import { injectGlobal } from "styled-components"

import "../styles/globals.sass"

import Home    from "../pages/home"
import Counter from "./counter"

import Nav from "../components/nav"

const links = [
  {
    url: "/",
    name: "Home",
  }, {
    url: "/counter",
    name: "Counter",
  },
]

injectGlobal`
  .tabs.is-centered {
    a.is-active {
      border-bottom-color: #00d1b2;
      color: #00d1b2;
    }
  }
`

const App = () => (
  <section className="section">
    <div className="container">
      <Nav links={links} />
      <Route path="/" exact component={Home} />
      <Route path="/counter" component={Counter} />
    </div>
  </section>
)

export default App
