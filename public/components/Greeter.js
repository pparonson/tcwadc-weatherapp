import React, { Component } from "react"
import GreeterMessage from "./GreeterMessage"
import GreeterForm from "./GreeterForm"

export default class Greeter extends Component {
    render() {
      let firstName = "Preston"
      let message = "This is from a component"

      return (
          <div>
              <GreeterMessage name={firstName} message={message}/>
          </div>
      );
    }
}
