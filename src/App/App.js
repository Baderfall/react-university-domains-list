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
    hideTable: true
  }

  componentDidMount() {
    loadUniversities()
      .then(universities => {
        allUniversities = universities;
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.children[0].value;
    const countryValue = e.target.children[1].value;
    this.setState({
      nameValue: nameValue,
      countryValue: countryValue,
      universities: allUniversities,
      hideTable: false
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <UniversitiesForm
          handleSubmit={this.handleSubmit}
        />
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
