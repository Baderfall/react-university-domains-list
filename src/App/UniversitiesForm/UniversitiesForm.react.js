import React from 'react';
import './UniversitiesForm.style.css';

export const UniversitiesForm = (props) => {
  return (
    <form className="query-form" onSubmit={props.handleSubmit}>
      <input
        name="nameValue"
        placeholder="Name"
      />
      <input
        name="countryValue"
        placeholder="Country"
      />
      <input type="submit" value="Search" />
    </form> 
  );
}
