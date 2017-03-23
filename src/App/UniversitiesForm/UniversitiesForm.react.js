import React from 'react';

export const UniversitiesForm = (props) => {
  return (
    <form className="query-form" onSubmit={props.handleSubmit}>
      <input
        name="nameQuery"
        placeholder="Name"
      />
      <input
        name="countryQuery"
        placeholder="Country"
      />
      <input type="submit" value="Search" />
    </form> 
  );
}
