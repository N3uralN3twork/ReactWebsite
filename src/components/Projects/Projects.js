import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import XGBoostLogo from "../../Assets/Projects/XGBoost_logo.png";
import RShinyLogo from "../../Assets/Projects/RShinyLogo.jpeg";
import PowerLogo from "../../Assets/Projects/PowerAnalysis.jpg";
import ClusteringLogo from "../../Assets/Projects/clustering.jpg";
import LeafletLogo from "../../Assets/Projects/LeafletLogo.png";
import LavaanLogo from "../../Assets/Projects/lavaan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is handful of projects that I'm proud of working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClusteringLogo}
              title="Cluster Validity Indices"
              date="Jan 22, 2023"
              description="This project was the seminal work of my master's degree in statistics. It focuses on validating clustering results."
              tags={["Python", "ML", "STATISTICS"]}
              link="https://n3uraln3twork.github.io/posts/clustering-indices-project/cluster-indices.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PowerLogo}
              title="Power Analysis Calculator"
              date="Nov 13th, 2022"
              description="This post is a walkthrough of various power analysis techniques and how to implement them in R."
              tags={["R", "STATISTICS", "DoE"]}
              link="https://n3uraln3twork.github.io/posts/sample-size-app/powerAnalysis.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeafletLogo}
              title="Japanese Population Decline (Leaflet)"
              date="Nov 6th, 2022"
              description="This project is a demonstration of map-making with the Leaflet library in R."
              tags={["R", "STATISTICS", "LEAFLET"]}
              link="https://n3uraln3twork.github.io/posts/japan-population/japanMaps.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LavaanLogo}
              title="Structural Equation Modelling"
              date="Aug 12th, 2022"
              description="This project is a walkthrough of structural equation modeling in R."
              tags={["R", "STATISTICS", "SEM"]}
              link={<Link to="/semproject">View Details</Link>}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={XGBoostLogo}
              title="XGBoost"
              date="Dec 8th, 2021"
              description="A notebook on what XGBoost is and how it works. It includes a sample application to predicting forest cover types."
              tags={["R", "ML", "XGBOOST"]}
              link="https://n3uraln3twork.github.io/posts/xgboost/xgboost.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RShinyLogo}
              title="Randomization Schemas"
              date="Sep 18th, 2020"
              description="This project is a full demonstration of designing an experiment, with an application created using Shiny."
              tags={["R", "STATISTICS", "DoE"]}
              link="https://n3uraln3twork.github.io/posts/random-schemas/random-schemas.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
