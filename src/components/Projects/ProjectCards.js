import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function ProjectCards(props) {
  // Function to check if link is an external URL
  const isExternalLink = (link) => {
    return link.startsWith("http") || link.startsWith("www");
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <div style={{ padding: "1rem" }}> {/* Wrapper div with padding */}
        <Card.Body>
          <Card.Title className="orange">
            {props.title} | {props.date}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {props.tags &&
            props.tags.map((tag, index) => (
              <Badge key={index} pill variant="primary" className="mr-2">
                {tag}
              </Badge>
            ))}
        </Card.Body>
        <div style={{ marginTop: "auto", textAlign: "center" }}> {/* Centering the button */}
          {isExternalLink(props.link) ? ( // Check if link is external
            <Button variant="primary" href={props.link} target="_blank">
              Explore
            </Button>
          ) : ( // Render internal Link if link is not external
            <Link to={`/projects/${props.link}`}>
              <Button variant="primary">Explore</Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCards;
