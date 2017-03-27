import React from 'react';
import './UniversitiesForm.style.css';

export const UniversitiesForm = (props) => {
  return (
    <form className="query-form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="nameValue"
        placeholder="Name"
        value={props.numberOfGuests}
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="countryValue"
        placeholder="Country"
        value={props.numberOfGuests}
        onChange={props.handleInputChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
