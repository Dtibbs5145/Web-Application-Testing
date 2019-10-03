import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';


export const addStrike = currentStrike => {
  return currentStrike + 1;
};

export const addFoul = currentStrike => {
  if (currentStrike >= 1) {
    return currentStrike + 1;
  } else {
    return currentStrike(2);
  }
};

function App() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);
  
  if (ball > 4) {
    setBall(0);
  };

  if (strike > 3) {
    setStrike(0);
  };

  if (hit > 1) {
    setHit(0);
    setBall(0);
    setStrike(0);
  }

  if (foul > 1) {
    setFoul(0);
  }

  return (
    <div>
      <Display />
      <Dashboard />
    </div>
  );
};
  export default App;