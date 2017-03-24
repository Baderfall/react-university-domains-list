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

    const nameValue = e.target.children[0].value;
    const countryValue = e.target.children[1].value;

    this.setState({
      nameValue,
      countryValue
    });
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <UniversitiesForm
          handleSubmit={this.handleSubmit}
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
