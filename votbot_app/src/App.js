import React, { Component } from 'react'
//import logo from './logo.svg';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import Form from './components/Form'

class App extends Component {

    render() {
      return (
        <div className="container">
          <Homepage />
        </div>
      )
    }
  }

export default App
