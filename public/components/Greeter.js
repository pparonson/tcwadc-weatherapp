import React, { Component } from "react"
import GreeterMessage from "./GreeterMessage"
import GreeterForm from "./GreeterForm"

export default class Greeter extends Component {
    render() {


      return (
          <div>
            <GreeterMessage name={firstName} msg={message} />
          </div>
      )
    }
}
