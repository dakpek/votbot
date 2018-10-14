import React, { Component } from 'react'
import './Homepage.css'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : ''
    }
  }

  componentDidMount() {
    fetch("http://localhost:4141/fn/taskMarketplace/userRead", {
      method: "POST",
      mode: "cors",
      headers: {
        "accept": "text/plain",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => this.setState({user: res}))

  }

  render() {
    console.log(this.state);
    return(
      <div className="container">
        <div className="nav">
          <div>Hello {this.state.user.username}</div>
          <div> vots: {this.state.user.vots}</div>
        </div>
        <div className="mainpage">
          <div className="tasks"></div>
          <div className="addtask"></div>
        </div>
      </div>
    )
  }
}

export default Homepage
