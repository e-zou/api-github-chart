import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from "axios";
import GitHubAPI from './GitHubAPI.js';


class App extends React.Component {

  render() {
    return (
      <GitHubAPI/>
    );
  }
}

export default App;
