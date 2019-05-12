import React, { Component } from "react"
import GreeterMessage from "./GreeterMessage"
import GreeterForm from "./GreeterForm"

export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: this.props.name
      }
      this.handleNewName = this.handleNewName.bind(this)
    }

    handleNewName(name) {
      console.log(`name: ${name}`)
      this.setState({ name: name })
    }

    render() {
      let message = "This is from a component"
      return (
          <div>
              <h1>My React Greeter App</h1>
              <GreeterMessage name={this.state.name} msg={message} />
              <GreeterForm onNewName={this.handleNewName}/>
          </div>
      )
    }
}
