import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { UniversityRow } from './UniversityRow/UniversityRow.react';
import { includesLow } from './../services';
import { constants } from './../constants';
import './UniversitiesTable.style.css';

let lastDisplayedUnv = 0;
let validUniversities = [];

export class UniversitiesTable extends Component {

  componentWillReceiveProps(nextProps) {
    validUniversities = nextProps.allUniversities.filter(university => {
      return includesLow(university.name, nextProps.nameValue) &&
        includesLow(university.country, nextProps.countryValue);
    });
  }

  displayMoreItems = () => {
    lastDisplayedUnv += constants.ADD_ON_EACH_CALLBACK;
    this.forceUpdate();
  }
  
  render() {
    const hasMore = validUniversities.length > lastDisplayedUnv;
    const displayedUniversities = validUniversities.slice(0, lastDisplayedUnv);
    const rows = [];

    displayedUniversities.forEach((university, index) => {
      rows.push(<UniversityRow key={index} university={university} />);
    });

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
          loadMore={this.displayMoreItems}
          hasMore={hasMore}>
            {rows}
        </InfiniteScroll>
      </table> 
    );
  }
}
