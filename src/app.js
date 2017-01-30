import React, { Component, PropTypes } from "react";
import "./styles/app.scss";
import "../node_modules/font-awesome/css/font-awesome.css";

import Nav from "./components/nav";

class App extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <Nav />
                    {this.props.children}
                </div>
            </section>
        );
    }
}

App.propTypes = {
    children: PropTypes.any.isRequired
};

export default App;
