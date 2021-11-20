import React, { Component } from 'react'

class BasicClassComp extends Component {
  constructor() {
    super()
    this.state = {
      message: 'welcome visitor',
    }
    //this.clickHandler = this.clickHandler.bind(this)
  }
 clickHandler = () => {
    this.setState({
      message: `thank you `,
    })
  }
  render() {
    const {name} = this.props
    return (
      <div>
        <h1>
          i am class component {this.state.message} {name}
        </h1>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
export default BasicClassComp
