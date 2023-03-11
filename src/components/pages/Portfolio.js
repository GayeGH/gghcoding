import React from 'react';
import pwgenImage from '../../assets/pwgen.png';
import petprojectImage from '../../assets/petproject.png';
import mealstottiesImage from '../../assets/mealstotties.png';
import weatherappImage from '../../assets/weatherapp.png';
import employeetrackerImage from '../../assets/employeetracker.png';
import notetakerImage from '../../assets/notetaker.png';
import teamprofgenImage from '../../assets/teamprofgen.png';
import findmysitterImage from '../../assets/findmysitter.png';
function Portfolio() {
  return (
    
      <div id="portfolio">
        
        
          <h2>Github Repositories</h2>
          <h2>Feel free to review projects on Github, such as...</h2>
          
          <a href="https://github.com/GayeGH/Employee-Tracker">
            <img src={employeetrackerImage} alt="employeetracker" id="largeportfoliopic"/>
          </a>
          
        <div id="smallportpics">
          <a href="https://github.com/Lwalsh2022/Pet-Project">
          <img src={petprojectImage} alt="petproject" className="smallportfoliopic"/>
          
          </a>
          <a  href="https://github.com/GayeGH/Password-Generator">
          <img src={pwgenImage} alt="pwgen" className="smallportfoliopic"/>
          </a>

          <a href="https://github.com/GhostoftheMill/project-p1g5">
          <img src={mealstottiesImage} alt="mealstotties" className="smallportfoliopic"/>
          </a>

         <a  href="https://github.com/GayeGH/Weather-App">
          <img src={weatherappImage} alt="weatherapp" className="smallportfoliopic"/>
          </a>

          <a href="https://github.com/GayeGH/Note-Taker1">
            <img src={notetakerImage} alt="notetaker" className="smallportfoliopic"/>
            </a>

         <a href="https://github.com/GayeGH/Team-Profile-Generator">
            <img src={teamprofgenImage}   alt="teamprofgen" className="smallportfoliopic"/>
            </a>
          <a href="https://github.com/Lwalsh2022/Find-My-Sitter">
            <img src={findmysitterImage}   alt="findmysitter" className="smallportfoliopic"/> 
           </a>
        </div>
        
      </div>
    
  );
}

export default Portfolio;
