import React, { Component } from 'react';
import { loadJSON } from './services';
import { AppHeader } from './AppHeader/AppHeader.react';
import { UniversitiesForm } from './UniversitiesForm/UniversitiesForm.react';
import { UniversitiesTable } from './UniversitiesTable/UniversitiesTable.react';
import { constants } from './constants';
import './App.css';

let allUniversities = [];

class App extends Component {
  state = {
    nameValue: '',
    countryValue: ''
  }

  componentDidMount() {
    const criticalUnvUrl = constants.USA_UNIVERSITIES_URL;
    const allUnvUrl = constants.ALL_UNIVERSITIES_URL;
    
    this.loadUniversities(criticalUnvUrl);
    this.loadUniversities(allUnvUrl);
  }

  loadUniversities(url) {
    loadJSON(url)
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
