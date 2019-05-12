import React, { Component } from "react"

export default class GreeterMessage extends Component {
  render() {
    const name = this.props.name
    const message = this.props.msg
    return (
        <div>
            <h2>Hello {name}</h2>
            <p>{message}</p>
        </div>
    )
  }
}

GreeterMessage.defaultProps = {
  name: "React"
  , msg: "This is a default message."
}
