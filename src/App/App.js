import React, { Component } from 'react';
import { loadJSON } from './services';
import { AppHeader } from './AppHeader/AppHeader.react';
import { UniversitiesForm } from './UniversitiesForm/UniversitiesForm.react';
import { UniversitiesTable } from './UniversitiesTable/UniversitiesTable.react';
import './App.css';

const baseUrl = 'http://universities.hipolabs.com/search';
let allUniversities = [];

class App extends Component {
  state = {
    nameValue: '',
    countryValue: ''
  }

  componentDidMount() {
    loadJSON(baseUrl)
      .then(data => {
        allUniversities = data;
        this.forceUpdate();
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.forceUpdate();
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <UniversitiesForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          nameValue={this.state.nameValue}
          countryValue={this.state.countryValue}
        />
        <UniversitiesTable
          allUniversities={allUniversities}
          nameValue={this.state.nameValue}
          countryValue={this.state.countryValue}
        />
      </div>
    );
  }
}

export default App;
