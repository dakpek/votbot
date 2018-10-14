import React, { Component } from 'react'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allVotes : ''
    }
  }
  updateVotes = e => {
    this.setState({
      newVotes: e.target.value
    })
  }
  onVotesSubmit = e => {
    e.preventDefault();
    this.setState({
      newVotes: ''
    })
  }
  render() {
    return(
      <h1>From Homepage</h1>
    )
  }
}

export default Homepage
