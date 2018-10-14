import React, { Component } from 'react'
//import logo from './logo.svg';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import Form from './components/Form'
import CardList from './components/CardList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //data: null
    };
  }

  //need did or will mount?
  componentWillMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    // if an agent handle already exists, there is no need to query for a handle
    //return modelIsOpen && !appProperties.Agent_Handle ? (
    return (
      <div>
        <header className="App-header">
        <i className="fa fa-flag" aria-hidden="true"></i>
        <CardList />
        <div id="content">
          <Route path='/' exact component={ Homepage } />
          <Route path='/taskread' component={ CardList } />
        </div>
        </header>
      </div>
    )
    //)
  }
}

export default App
