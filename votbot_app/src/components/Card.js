import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  delete = (id) => {
    this.setState((prevState) => {
      card: prevState.task.filter(item => item.id !== id)
    });
  }

  render() {
    return(
      <div className="card" key={this.props.tasks.id}>
        <h3>{this.props.tasks.title}</h3>
        <p>{this.props.tasks.description}</p>
        <p>{this.props.tasks.pool}</p>
        <p>{this.props.tasks.createdAt}</p>
        <p>{this.props.tasks.status}</p>
        <button onClick={this.delete}>Do</button>
      </div>
    )
  }

}

export default Card
