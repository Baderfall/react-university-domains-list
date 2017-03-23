import React, { Component } from 'react';
import { UniversityRow } from './UniversityRow/UniversityRow.react';
import './UniversitiesTable.style.css';

export class UniversitiesTable extends Component {
  render() {
    const rows = [];
    const universities = this.props.universities;
    const nameValue = this.props.nameValue;
    const countryValue = this.props.countryValue;

    universities.forEach((university, index) => {
      if (university.name.includes(nameValue) && university.country.includes(countryValue)) {
        rows.push(<UniversityRow key={index} university={university} />);
      }
    });

    return (
      <table hidden={this.props.hidden} className="universities-table">
        <thead>
          <tr>
            <th>Alpha code</th>
            <th>Country</th>
            <th>Name</th>
            <th>Web page</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table> 
    );
  }
}
