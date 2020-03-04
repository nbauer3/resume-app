import React from 'react';

import Download from './components/resume-link/resume-link.component';
import pic from '../src/components/resume-link/IMG_1698.jpeg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {pic} alt = 'Pic of Nic'/>
        <h1>Nick's Resume App</h1>
        <div className="description">
          <p>I have acquired an abundance of experience developing, debugging,
             and testing code.  I am familiar with Linux, Unix, Windows, and Mac 
             Operating Systems. I have also learned to manage, manipulate and test 
             databases within a RDBMS using SQL scripting. In addition to 
             programming, I can also perform many types of data analysis, such as 
             interpreting data and analyzing the results using statistical 
             techniques to generate easy to interpret reports. I have gained 
             experience in the following programs:
            ·Java, HTML, CSS, JavaScript. SAS, MATLAB, R, SQL, JMP, Python & Maple
            ·Microsoft: (Excel, Word, PowerPoint)
          </p>
        </div>
        <Download/>
      </header>
    </div>
  );
}

export default App;
