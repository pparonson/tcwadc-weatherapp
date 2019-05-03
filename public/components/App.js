import React, { Component } from "react"
import Greeter from "./Greeter"

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Greeter/>
            </div>
        );
    }
}
