import logo from './logo.svg';
import React from 'react';
import './AppHeader.style.css';

export const AppHeader = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React University Domains List</h2>
    </div>
  );
}
