import React from "react";
import { render } from "react-dom";
import "./styles/app.scss";

import Counter from "./counter.js";

class App extends React.Component {
    render() {
        return(
            <section className="section">
                <div className="container has-text-centered">
                    <h1 className="title">Counter example</h1>
                    <div className="columns">
                        <div className="column is-4 is-offset-4">
                            <Counter />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

render(<App/>, document.getElementById("app"));
