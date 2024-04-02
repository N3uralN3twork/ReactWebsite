import React from "react";
import Card from "react-bootstrap/Card";
import { ImBookmark, ImHistory, ImLocation } from "react-icons/im";

//* https://react-icons.github.io/react-icons/icons/im/ */

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am currently a data scientist working in the insurance industry.
            <br />
            I studied finance in undergrad, but found my passion in statistics.
            <br />
            <br />
          </p>
          <h3 className="orange">Education:</h3>
          <ul>
            <li className="about-education">
              <ImBookmark /> M.S. in Statistics (2021)
            </li>
            <li className="about-education">
              <ImBookmark /> B.A in Finance | 3 Minors (2020)
            </li>
          </ul>
          <br />
          <h3 className="orange">Experience:</h3>
          <ul>
            <li className="about-experience">
              <ImLocation /> Senior Data Scientist | Progressive Insurance
            </li>
            <li className="about-experience">
              <ImHistory /> Data Analyst | Progressive Insurance
            </li>
            <li className="about-experience">
              <ImHistory /> Graduate Assistant | Cleveland State University
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
