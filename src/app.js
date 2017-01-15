import React, { PropTypes } from "react";
import "./styles/app.scss";
import "../node_modules/font-awesome/css/font-awesome.css";

import Nav from "./components/nav";

class App extends React.Component {
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
    children: PropTypes.object.isRequired
};

export default App;
