import React from 'react';

function Portfolio() {
  return (
    <div>
      <div id="portfolio" className="card">
        <p>
          <h2>Github Repositories</h2>
          <h2>Feel free to review projects on Github, such as...</h2>
          <a href="https://github.com/GayeGH/Horiseon">
            <img
              src="https://i.imgur.com/2xMnUTm.png"
              width="400"
              height="300"
              alt="Horiseon logo"
            />
          </a>

          <a href="https://github.com/GhostoftheMill/project-p1g5">
            <img
              src="https://i.imgur.com/JjHf0vJ.png"
              width="400"
              height="300"
              alt="Meals and Totties"
            />
          </a>

          <a href="https://github.com/Lwalsh2022/Pet-Project">
            <img
              src="https://imgur.com/vOB8BG9.png"
              width="400"
              height="300"
              alt="Pet-Project"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
export default Portfolio;
