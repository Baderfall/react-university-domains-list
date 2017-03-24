import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller'
import { UniversityRow } from './UniversityRow/UniversityRow.react';
import './UniversitiesTable.style.css';

let lastDisplayedUnv = 0;
let validUniversities = [];

export class UniversitiesTable extends Component {

  componentWillReceiveProps(nextProps) {
    lastDisplayedUnv = 0;
  }

  loadItems = () => {
    lastDisplayedUnv++;
    this.forceUpdate();
  }

  render() {
    const allUniversities = this.props.allUniversities;
    const nameValueLow = this.props.nameValue.toLowerCase();
    const countryValueLow = this.props.countryValue.toLowerCase();
    const rows = [];

    validUniversities = allUniversities.filter(university => {
      const universityNameLow = university.name.toLowerCase();
      const universityCountryLow = university.country.toLowerCase();
      return universityNameLow.includes(nameValueLow) && universityCountryLow.includes(countryValueLow);
    });

    const displayedUniversities = validUniversities.slice(0, lastDisplayedUnv);

    displayedUniversities.forEach((university, index) => {
      rows.push(<UniversityRow key={index} university={university} />);
    });

    const loader = <tr><td>Loading ...</td></tr>;

    const hasMore = validUniversities.length > lastDisplayedUnv;
    
    return (
      <table className="universities-table">
        <thead>
          <tr>
            <th>Alpha code</th>
            <th>Country</th>
            <th>Name</th>
            <th>Web page</th>
            <th>Domain</th>
          </tr>
        </thead>
        <InfiniteScroll
          element={'tbody'}
          loadMore={this.loadItems}
          hasMore={hasMore}
          loader={loader}>
            {rows}
        </InfiniteScroll>
      </table> 
    );
  }
}
