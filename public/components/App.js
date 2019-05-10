import React, { Component } from "react"
import Greeter from "./Greeter"

export default class App extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <div>
                <h1>My React Greeter App</h1>
                <Greeter/>
            </div>
        );
    }
}
