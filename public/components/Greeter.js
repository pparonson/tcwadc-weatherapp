import React, { Component } from "react"
import GreeterMessage from "./GreeterMessage"
import GreeterForm from "./GreeterForm"

export default class Greeter extends Component {
    render() {
      let firstName = "Preston"
      let message = "This is from a component"

      return (
          <div>
<<<<<<< HEAD
            <GreeterMessage name={firstName} msg={message} />
            <GreeterForm />
=======
              <GreeterMessage name={firstName} message={message}/>
>>>>>>> ca51130956b4d690cc05345a5b65e9681294dde4
          </div>
      );
    }
}
