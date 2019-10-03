import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ball: 0,
      strike: 0
    };
  };

  render() {
    return (
      <Dashboard />
    )
  }
};

export default App;
//setState