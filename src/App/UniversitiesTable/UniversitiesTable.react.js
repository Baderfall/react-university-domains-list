import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller'
import { UniversityRow } from './UniversityRow/UniversityRow.react';
import { includesLow } from './../services';
import './UniversitiesTable.style.css';

let lastDisplayedUnv = 0;
let validUniversities = [];

export class UniversitiesTable extends Component {

  componentWillReceiveProps(nextProps) {
    lastDisplayedUnv = 0;
    const allUniversities = nextProps.allUniversities;
    const nameValue = nextProps.nameValue;
    const countryValue = nextProps.countryValue;

    validUniversities = allUniversities.filter(university => {
      return includesLow(university.name, nameValue) && includesLow(university.country, countryValue);
    });
  }

  displayMoreItems = () => {
    const addPerReflow = 5;
    lastDisplayedUnv += addPerReflow;
    this.forceUpdate();
  }
  
  render() {
    const loader = <tr><td>Loading ...</td></tr>;
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
          hasMore={hasMore}
          loader={loader}>
            {rows}
        </InfiniteScroll>
      </table> 
    );
  }
}
