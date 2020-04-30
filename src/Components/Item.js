import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../Redux/action";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  const filterdItems = props.ListItems.filter((item) =>
    item.name.toUpperCase().includes(props.input.toUpperCase())
  );
  return (
    <div className="items-container">
      {filterdItems.map((element) => (
        <Card
          key={element.id}
          style={{
            width: "18rem",
            height: "42,125rem",
            margin: "0px 10px 20px 0",
            textAlign: "center",
          }}
        >
          <Link to={`/description/${element.name}`}>
            <Card.Img
              height="300px"
              width="285px"
              variant="top"
              src={element.image}
            />
          </Link>
          <Card.Body>
            <Card.Title>{element.name.slice(0, 20)}</Card.Title>
            <Card.Text>{element.description.slice(0, 30)}</Card.Text>
            <br />
            <Card.Text as="h3">${element.price}</Card.Text>
            <br />
            <Button
              variant={!element.isInCart ? "success" : "danger"}
              onClick={() => props.addToCart(element.id)}
            >
              {!element.isInCart ? "Add To Cart" : "Remove"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  ListItems: state.ListItems,
  input: state.input,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
