import React, { Component } from "react"

export default class GreeterMessage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const name = this.props.name
    const message = this.props.message
    return (
        <div>
            <h2>Hello {name}</h2>
            <p>{message}</p>
        </div>
    );
  }
}

GreeterMessage.defaultProps = {
  name: "React"
  , message: "This is a default message."
}
