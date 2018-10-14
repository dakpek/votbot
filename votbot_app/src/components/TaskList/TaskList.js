import React, { Component } from 'react';
import './TaskList.css';
import Task from '../Task'

class TaskList extends Component {

constructor(props) {
  super(props);
  this.state = {
    tasks: []
  }
}

getAll = () => {
  fetch("http://localhost:4141/fn/taskMarketplace/taskRead", {
    method: "POST",
    mode: "cors",
    headers: {
      "accept": "text/plain",
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(res => this.setState({tasks: res}))
}

componentDidMount() {
  this.getAll()
}


render() {
  console.log(this.state.tasks);
  return (
    <div className="tl-container">
        {this.state.tasks.length
          ? this.state.tasks.map( (el, i) =>
            <Task
              key={el.Hash}
              user={this.props.user}
              task={el}
              getAll={this.getAll}/>)
          : <h4>loading...</h4>}
    </div>
  )
}


}

export default TaskList;
