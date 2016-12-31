import React, { PropTypes } from "react";
import "./styles/app.scss";

import Nav from "./demo/nav";

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
