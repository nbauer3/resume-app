import React, { Component } from 'react';
import './resume-link.styles.scss'
import doc from '../resume-link/Bauer-Nicholas_BAH-Resume.docx';
import pdf from '../resume-link/Bauer-Nicholas_BAH-Resume.pdf';

//TODO : change from a-link to button
class Download extends Component {

  render() {
    return (
    <div className = "Download">
        <div>
            <a href = {doc}>Download Resume</a>
        </div>
        <div>
            <a href = {pdf} 
            target = "_blank"
            rel="noopener noreferrer"
            >View PDF</a>
        </div>
    </div>
    );
  }
}

export default Download;