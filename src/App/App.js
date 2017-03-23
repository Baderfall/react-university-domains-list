import React, { Component } from 'react';
import { loadUniversities } from './services';
import { AppHeader } from './AppHeader/AppHeader.react';
import { UniversitiesForm } from './UniversitiesForm/UniversitiesForm.react';
import { UniversitiesTable } from './UniversitiesTable/UniversitiesTable.react';
import './App.css';

let allUniversities = [];

class App extends Component {
  state = {
    validUniversities: [],
    displayedUniversities: [],
    lastDisplayedUniversity: 0,
    nameValue: '',
    countryValue: ''
  }

  componentDidMount() {
    loadUniversities()
      .then(universitiesData => {
        allUniversities = universitiesData;
      })
      .then(() => {
        this.filterUniversities('', '');
      });
  }

  filterUniversities = (nameValue, countryValue) => {
    const validUniversities = allUniversities.filter(university => {
      return university.name.includes(nameValue) && university.country.includes(countryValue);
    });
    this.setState({
      validUniversities,
      displayedUniversities: []
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.children[0].value;
    const countryValue = e.target.children[1].value;
    this.filterUniversities(nameValue, countryValue);
  }

  loadItems = () => {
    if (this.state.validUniversities.length === 0) {
      return;
    }
    let displayedUniversities = this.state.displayedUniversities;
    displayedUniversities.push(this.state.validUniversities[this.state.lastDisplayedUniversity++]);
    this.setState({
      displayedUniversities
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
          validUniversities={this.state.validUniversities}
          displayedUniversities={this.state.displayedUniversities}
          loadItems={this.loadItems}
        />
      </div>
    );
  }
}

export default App;
