import React, { Component } from 'react';
import './Task.css'

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  addVots = (task, amount) => {
    let vots = task.Entry.pool
    let hash = task.Hash
    vots = vots + amount;
    this.updateTask(hash, vots)
    this.props.getAll()
  }

  assumeTask = (task) => {
    let vots = task.Entry.pool
    let existingVots = this.props.user.vots
    let hash = this.props.user.Hash
    vots = vots + existingVots
    this.updateTask(hash, vots)
    this.props.getAll()
  }



  updateTask = (receiverHash, votAmount) => {

    let data = {
      transfer: true,
      receiverHash: receiverHash,
      amount: votAmount
    }
    fetch("http://localhost:4141/fn/taskMarketplace/taskUpdate", {
      method: "POST",
      mode: "cors",
      headers: {
        "accept": "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => console.log(res))

  }

  render() {
    return (
      <div className="t-container">
        <div className="info">

        </div>
        <div
          className="addVot"
          onClick={() => this.addVots(this.props.task, 5)}
        >Add 5 Vots</div>
        <div className="assume"></div>
      </div>
    )
  }

}
