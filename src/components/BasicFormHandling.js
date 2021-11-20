import React, { Component } from 'react'

class BasicFormHandling extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fname: '',
      lname: '',
    }
  }
  setUserName = (event) => {
    console.log(event)
    this.setState({
      fname: event.target.value,
    })
  }
  render() {
    return (
      <div>
        <label>username : </label>
        <input
          type='text'
          onChange={this.setUserName}
          value={this.state.fname}
          name='fname'
        ></input>
        <label>username : </label>
        <input
          type='text'
          onChange={this.setUserName}
          value={this.state.lname}
          name='lname'
        ></input>
        <h1>{this.state.lname}</h1>
      </div>
    )
  }
}
export default BasicFormHandling
