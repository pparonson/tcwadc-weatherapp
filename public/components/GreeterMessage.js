import React, { Component } from "react"

export default class GreeterMessage extends Component {
  constructor(props) {
    super(props)
    // initial state
    this.state = {
      name: this.props.name
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    let nameRef = this.refs.name
    let name = nameRef.value
    // setState also looks for changes and re-renders the components
    nameRef.value = ""
    typeof name === "string" && name.length > 0 ?
      this.setState({ name: name }) :
      console.log(`Invalid input: "${name}"`)
  }

  render() {
<<<<<<< HEAD
    const name = this.state.name
    const message = this.props.msg
=======
    const name = this.props.name
    const message = this.props.message
>>>>>>> ca51130956b4d690cc05345a5b65e9681294dde4
    return (
        <div>
            <h2>Hello {name}</h2>
            <p>{message}</p>

            <form onSubmit={this.handleClick}>
              <input type="text" ref="name" />
              <div>
                <button>Set Name</button>
              </div>
            </form>
        </div>
    );
  }
}

GreeterMessage.defaultProps = {
  name: "React"
  , message: "This is a default message."
}
