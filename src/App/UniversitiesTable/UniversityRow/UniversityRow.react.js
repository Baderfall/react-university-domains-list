import React from 'react';

export const UniversityRow = (props) => {
  return (
    <tr>
      <td>{props.university.alpha_two_code}</td>
      <td>{props.university.country}</td>
      <td>{props.university.name}</td>
      <td><a href={props.university.web_page}>{props.university.web_page}</a></td>
      <td>{props.university.domain}</td>
    </tr>
  );
}
