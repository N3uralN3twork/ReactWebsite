import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myLogo from "../../Assets/Images/Home-Logo.svg";
import Tilt from "react-parallax-tilt";

function HomeV3() {
  return (
    <Container fluid className="home-about-section" id="about">
        <Container>
            <Row>
                <Col md={8} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
                        <span className="purple"> WHO AM I? </span>
                    </h1>
                    <p className="home-about-body">
                    My name is Matthias <i>Muh-thigh-is</i> and I am a data scientist currently working in the insurance industry.
                    <br />
                    <br />
                    I am an 
                    <i><b className="purple">analytically-minded</b></i> developer with
                    <b className="orange">5</b> years of experience in data analysis and <b className="orange">3</b> years of experience in model building.
                    <br />
                    <br />
                    I hold a Master of Science in mathematics with a specialization in <b className="purple"><i>statistics</i></b>, where I created software in Python for analyzing the validity of clustering models.
                    </p>
                </Col>
                <Col md={4} className="myAvtar">
                    <Tilt>
                        <img src={myLogo} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
        </Container>
    </Container>
    );
}
export default HomeV3;
