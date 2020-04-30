import React from "react";
import "./Cart.css";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  openCartModal,
  incrementQuantity,
  decrementQuantity,
  addToCart,
} from "../Redux/action";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

function Cart(props) {
  let tab = [];
  let x = 0;

  return (
    <Modal show={props.isOpenModal} onHide={props.openCartModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.ListItems.map(
          (element) =>
            element.isInCart && (
              <div className="container" key={element.id}>
                <div className="row" style={{ width: "100%" }}>
                  <div className="colimg">
                    <img
                      src={element.image}
                      width="80px"
                      height="80px"
                      alt={element.name}
                    />
                  </div>
                  <div className="colname">{element.name}</div>
                  <div className="coldesc"></div>
                  <div
                    className="colquantity"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FaMinusCircle
                      onClick={() =>
                        element.quantity > 1 &&
                        props.decrementQuantity(element.id)
                      }
                    />
                    <span className="quantity">{element.quantity}</span>
                    <FaPlusCircle
                      onClick={() => props.incrementQuantity(element.id)}
                    />
                  </div>
                  <div className="colprice"> ${element.price} </div>
                  <div className="coltotalprice">
                    ${element.price * element.quantity}
                  </div>
                  <div className="coltrash">
                    <FaTrash
                      color="#dc3545"
                      onClick={() => props.addToCart(element.id)}
                    />
                  </div>
                </div>
                <div style={{ display: "none" }}>
                  {tab.push(element.price * element.quantity)}

                  {(x = tab.reduce((a, b) => a + b))}
                </div>
              </div>
            )
        )}
      </Modal.Body>

      <div className="foot">
        <Button variant="secondary" onClick={props.openCartModal}>
          Close
        </Button>
        <span className="total">Total: ${x}</span>
        <Button
          variant="primary"
          onClick={() => alert("Ooops under construction!")}
        >
          Buy
        </Button>
      </div>
    </Modal>
  );
}
const mapStateToProps = (state) => ({
  isOpenModal: state.isOpenModal,
  ListItems: state.ListItems,
});
const mapDispatchToProps = (dispatch) => {
  return {
    openCartModal: (payload) => dispatch(openCartModal(payload)),
    incrementQuantity: (payload) => dispatch(incrementQuantity(payload)),
    decrementQuantity: (payload) => dispatch(decrementQuantity(payload)),
    addToCart: (payload) => dispatch(addToCart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
