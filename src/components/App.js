import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SearchPage from './SearchPage'
import WordPage from './WordPage'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {filter: ""}
  }
  render() {
    return (
      <div>
        <Router>
          <div className="app">
            <div className="header">
              <Link to = "/">
                <h1>Vocabul&auml;ri Piasintein</h1>
               </Link>
              <input type="text" placeholder="Ricerca" onChange={e => this.setState({filter: e.target.value})}></input>
            </div>
            <Route exact path="/" render={() => (
              <SearchPage filter={this.state.filter}/>
            )} />
            <Route path="/words/:word" component={WordPage} />
          </div>
        </Router>
      </div>
      
    )
  }
}

export default App
