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
        </header>
        <div className="description">
          <p>
            I have acquired an abundance of experience developing, debugging,
            and testing code.  I am familiar with Linux, Unix, Windows, and Mac 
            Operating Systems. I have also learned to manage, manipulate and test 
            databases within a RDBMS using SQL scripting. In addition to 
            programming, I can also perform many types of data analysis/science, such as 
            interpreting data and analyzing the results using statistical 
            techniques to generate easy to interpret reports.
          </p>
        </div>
        <div className="description-tech">
          <p>
            Programming Languages: Java, HTML, CSS, SQL, Maple
            MATLAB, SAS, Javascript, R, JMP, Python , PHP, XML, Apex <br/>
            Databases: MySQL, HSQL, NoSQL<br/>
            Frameworks: Node.js, React.js, Express, Spring Boot<br/>
            Operating Systems: Windows, MacOS, Linux, Unix<br/>
          </p>
        </div>
        <Download/>
    </div>
  );
}

export default App;
