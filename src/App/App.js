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
    lastDisplayedUnv: 0,
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
          validUniversities: allUniversities
        });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const nameValue = e.target.children[0].value;
    const nameValueLow = nameValue.toLowerCase();
    const countryValue = e.target.children[1].value;
    const countryValueLow = countryValue.toLowerCase();

    const validUniversities = allUniversities.filter(university => {
      const universityNameLow = university.name.toLowerCase();
      const universityCountryLow = university.country.toLowerCase();

      return universityNameLow.includes(nameValueLow) && universityCountryLow.includes(countryValueLow);
    });
    this.setState({
      validUniversities,
      lastDisplayedUnv: 0,
      nameValue,
      countryValue
    });
    console.log(this.state);
  }

  loadItems = () => {
    if (this.state.validUniversities.length === 0) {
      return;
    }

    const lastDisplayedUnvUpd = this.state.lastDisplayedUnv + 1;
    this.setState({
      lastDisplayedUnv: lastDisplayedUnvUpd
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
          lastDisplayedUnv={this.state.lastDisplayedUnv}
          loadItems={this.loadItems}
        />
      </div>
    );
  }
}

export default App;
