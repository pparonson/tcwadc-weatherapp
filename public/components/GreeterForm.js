import React, { Component } from "react"

export default class GreeterForm extends Component {
  onFormsubmit(e) {
    e.preventDefault()
    let nameRef = this.refs.name
    let name = nameRef.value
    // setState also looks for changes and re-renders the components
    if (typeof name === "string" && name.length > 0) {
      // pass the new state to container app.js
      this.props.onNewName
      nameRef.value = ""
    }
  }
  render() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
              <input type="text" ref="name" />
              <div>
                <button>Set Name</button>
              </div>
            </form>
        </div>
    )
  }
}
