import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>I'm Zakir - A Data Analyst</h2>
        <div className="prompt">
          <p>👋I turn data into useful insights👋</p>
          <LinkedInIcon
            cursor="pointer"
            aria-label="Linkedin.com"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/md-zakir-ahmed",
                "_blank"
              )
            }
          />
          <GitHubIcon
            cursor="pointer"
            aria-label="Github.com"
            onClick={() =>
              window.open("https://github.com/Md-Zakir-Ahmed7", "_blank")
            }
          />
          <EmailIcon
            cursor="pointer"
            aria-label="Github.com"
            onClick={() =>
              window.open(
                "https://gmail.com/mdzakirahmed710@gmail.com",
                "_blank"
              )
            }
          />
        </div>
      </div>
      <div className="skills">
        <h1>About Me</h1>
        <ol className="list">
          <li className="item">
            <h2>Technologies</h2>
            <span>PowerBI,SQL,Excel,Python,React,HTML,CSS</span>
          </li>
        </ol>
        <ol className="list">
          <li className="item">
            <h2>Qualities</h2>
            <span>
              Quick learner,Team Player,Good Communicator,Problem Solver
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
