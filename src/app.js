import React, { Component, PropTypes } from "react";
import "./styles/app.scss";
import "../node_modules/font-awesome/css/font-awesome.css";

import Nav from "./components/nav";

class App extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    }

    render() {
        const links = [
            {
                url: "/",
                name: "Home"
            }, {
                url: "/counter",
                name: "Counter"
            }
        ];

        return (
            <section className="section">
                <div className="container">
                    <Nav links={links} />
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default App;
