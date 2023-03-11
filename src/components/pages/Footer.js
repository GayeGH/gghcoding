import React from 'react';
import githubImage from '../../assets/github.png';
import indeedImage from '../../assets/indeed.png';
import resumeImage from '../../assets/resume.png'
export default function App() {
  return (
    

      <div id="footerimages">
        © 2023 Copyright
        <a href="https://github.com/GayeGH">
          <img src={githubImage} alt="githublogo"/>
          </a>

          <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.13748415.922634521.1678534065-602772814.1677172522">
          <img src={indeedImage} alt="indeedlogo"/>
          </a>

          <a href="https://profile.indeed.com/document/view">
          <img src={resumeImage} alt="resumelogo"/>
          </a>
       </div>
    
  );
}