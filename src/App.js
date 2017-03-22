import React, { Component } from 'react';
import { loadUniversities } from './services';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    universities: [],
    nameQuery: '',
    countryQuery: ''
  }

  componentDidMount() {
    loadUniversities()
      .then(universities => this.setState( {universities} ))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React University Domains List</h2>
        </div>
        <div>
          <ul>
            {this.state.universities.map((university, index) => <li key={index}>{university.name}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
