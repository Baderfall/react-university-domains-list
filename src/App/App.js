import React, { Component } from 'react';
import { loadUniversities } from './services';
import { AppHeader } from './AppHeader/AppHeader.react';
import { UniversitiesForm } from './UniversitiesForm/UniversitiesForm.react';
import { UniversitiesTable } from './UniversitiesTable/UniversitiesTable.react';
import './App.css';

let allUniversities = [];

class App extends Component {
  state = {
    nameValue: '',
    countryValue: ''
  }

  componentDidMount() {
    loadUniversities()
      .then(universitiesData => {
        allUniversities = universitiesData;
      })
      .then(() => {
        this.setState({
          nameValue: '',
          countryValue: '',
        });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
