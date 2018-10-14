import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id:1,
          title: "Task Example",
          description: "our example task",
          pool: 42,
          createdAt: "now",
          status: "open"
        },
        {
          id:2,
          title: "Task Example 2",
          description: "our example task 2",
          pool: 21,
          createdAt: "now",
          status: "open"
        },
        {
          id:3,
          title: "Task Example 3",
          description: "our example task 3",
          pool: 84,
          createdAt: "now",
          status: "open"
        },
      ],
    }
    //this.getAll = this.getAll.bind(this);
  }
  getAll = () => {
    fetch(this.props.baseUrl)
    .then(res => res.json())
    .then(result => this.setState({tasks: result}, ()=> console.log(this.state.tasks)))
  }

  render() {
    return (
      <div>
        {this.state.tasks.length ?
          this.state.tasks.map( (task, i) =>
          <Card tasks={task} />)
        : <h4>loading...</h4>}
      </div>
    )
  }
}

export default CardList;
