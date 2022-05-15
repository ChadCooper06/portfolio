import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container className="about-me">
      <Row>
        <Col className="headshot" id="headshot">
          <img
            id="headshot"
            src={headshot}
            alt="image name"
          />
        </Col>
        <Col>
            My name is Chad Cooper and I am from a small Kentucky town and graduated from Eastern Kentucky University. After college I held 
          several positions in different workplaces and at the behest of a friend, I attended the Awesome Inc U 
          Web Development Bootcamp. There I learned to be a full stack web developer and the skills associated with 
          how to learn more languages in the future. Some non-coding related passions I have in life are; hiking, camping, 
          movies, reading and learning new things. I have also taught myself how to survive in the woods, as well as 
          various edible and/or medicinal wild plants.
        </Col>
      </Row>
    </Container>
  );
}