import React from 'react';
import download from '../../assets/Emily/download.png';

function Resume() {
  return (
    <div class="box">
      <h1>Resume</h1>
      <p>*Click here to <img alt="download_button" style={{ width: "5%" }} src={download}/> my resume</p>
      <div>
        <h2>Front End Proficencies</h2>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        <h2>Back End Proficencies</h2>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
      </div>
    </div>
  )
}

export default Resume;