import React from "react"
import { Route } from "react-router-dom"

import "./styles/globals.sass"

import Home    from "./pages/home"
import Counter from "./containers/counter"

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
