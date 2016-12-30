import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.calculateCount = this.calculateCount.bind(this);
    }

    calculateCount(action) {
        if(action === "increment") {
            this.setState({ count: this.state.count + 1 });
        } else {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return(
            <div>
                <h2 className="title">{ this.state.count }</h2>

                <a  className="button is-success"
                    onClick={() => this.calculateCount("increment")} 
                    style={{ marginRight: 10 }}
                >
                    Increment
                </a>

                <a  className="button is-danger" 
                    onClick={() => this.calculateCount("decrement")}
                >
                    Decrement
                </a>
            </div>
        );
    }
}

export default Counter;