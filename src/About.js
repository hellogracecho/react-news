import React from "react";
import "./App.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-body">
        <h2>Who Am I?</h2>
        <p>
          Visit my portfolio site:{" "}
          <a
            href="http://hellogracecho.com"
            alt="Grace Cho portfolio site"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://hellogracecho.com
          </a>
        </p>
        <p>
          Visit my BCIT site:{" "}
          <a
            href="http://gcho.bcitwebdeveloper.ca"
            alt="Grace Cho BCIT TWD site"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://gcho.bcitwebdeveloper.ca
          </a>
        </p>
        <br />
        <h2>Reference</h2>
        <p>
          The News Database API:{" "}
          <a
            href="https://newsapi.org/"
            alt="The News DB API"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://newsapi.org/
          </a>
        </p>
      </div>
    );
  }
}

export default About;
