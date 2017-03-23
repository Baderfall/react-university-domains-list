import React, { Component } from 'react';
import { loadUniversities } from './services';
import { AppHeader } from './AppHeader/AppHeader.react';
import { UniversitiesForm } from './UniversitiesForm/UniversitiesForm.react';
import { UniversitiesTable } from './UniversitiesTable/UniversitiesTable.react';
import './App.css';

let allUniversities = [];

class App extends Component {
  state = {
    universities: [],
    nameValue: '',
    countryValue: '',
    hideTable: true,
    errorMessage: ''
  }

  componentDidMount() {
    loadUniversities()
      .then(universitiesData => {
        allUniversities = universitiesData;
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.children[0].value;
    const countryValue = e.target.children[1].value;

    if (nameValue || countryValue) {
      this.setState({
        universities: allUniversities,
        nameValue: nameValue,
        countryValue: countryValue,
        hideTable: false,
        errorMessage: ''
      })

    } else {
      this.setState({
        universities: [],
        nameValue: nameValue,
        countryValue: countryValue,
        hideTable: true,
        errorMessage: 'Please enter a country or university name'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <UniversitiesForm
          handleSubmit={this.handleSubmit}
        />
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <UniversitiesTable
          hidden={this.state.hideTable}
          universities={this.state.universities}
          nameValue={this.state.nameValue}
          countryValue={this.state.countryValue}
        />
      </div>
    );
  }
}

export default App;
