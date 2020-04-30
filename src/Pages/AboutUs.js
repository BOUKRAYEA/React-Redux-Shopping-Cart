import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div style={{ margin: "70px 0 20px 0" }} />
      <Card className="text-center">
        <Card.Header as="h2">About Us</Card.Header>
        <Card.Body>
          <Card.Title>GoMyCode</Card.Title>
          <img
            src="https://gomycode.tn/images/nav/logo-GMC-white.png"
            alt="GMC"
          />
          <br />
          <br />
          <Card.Text>
            GoMyCode est la plus grande communauté de développeurs en Afrique et
            au Moyen-Orient.
          </Card.Text>

          <Card.Text>
            Nous formons la prochaine génération de développeurs et les
            connectons avec les entreprises qui construisent le monde de demain.
          </Card.Text>

          <Link to="/">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutUs;
