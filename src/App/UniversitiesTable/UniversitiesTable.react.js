import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller'
import { UniversityRow } from './UniversityRow/UniversityRow.react';
import './UniversitiesTable.style.css';

export class UniversitiesTable extends Component {
  render() {
    const rows = [];
    const displayedUniversities = this.props.displayedUniversities;
    displayedUniversities.forEach((university, index) => {
      rows.push(<UniversityRow key={index} university={university} />);
    });

    const loader = <tr><td>Loading ...</td></tr>;
    
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
          loadMore={this.props.loadItems}
          hasMore={true}
          loader={loader}>
            {rows}
        </InfiniteScroll>
      </table> 
    );
  }
}
