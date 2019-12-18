import React from 'react';

import './App.css';

import Resume from './components/resume-link/resume-link.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Nick's Resume-React-App</p>
        <Resume/>
      </header>
    </div>
  );
}

export default App;
