import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Description(props) {
  return (
    <div>
      <div style={{ margin: "70px 0 20px 0" }} />
      {props.ListItems.map(
        (element) =>
          element.name === props.match.params.id && (
            <Card className="text-center" key={element.id}>
              <Card.Header as="h2">{element.name}</Card.Header>
              <Card.Body>
                <img
                  width="400px"
                  height="400px"
                  src={element.image}
                  alt={element.name}
                />
                <br />
                <br />
                <Card.Text>{element.description}</Card.Text>
                <Link to="/">
                  <Button variant="primary">Go Back</Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          )
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  ListItems: state.ListItems,
});

export default connect(mapStateToProps)(Description);
