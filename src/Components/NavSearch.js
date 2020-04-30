import React from "react";
import "./NavSearch.css";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { handleChange, openCartModal } from "../Redux/action";
import { connect } from "react-redux";
import Cart from "./Cart";
import { FaShoppingCart, FaOpencart, FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavSearch(props) {
  let nbrofItems = 0;
  return (
    <div className="navserachbar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <FaOpencart size="2.750rem" style={{ marginRight: "10px" }} />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Navbar.Text className="navbar-content">Home</Navbar.Text>
          </Link>
          <Link to="/aboutus">
            <Navbar.Text className="navbar-content">About us</Navbar.Text>
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={props.input}
            onChange={(event) => props.handleChange(event)}
          />
        </Form>
        <div style={{ display: "none" }}>
          {props.ListItems.map((item) => item.isInCart && (nbrofItems += 1))}
        </div>
        <div style={{ marginLeft: "20px" }}>
          <div className="dot-container">
            <span className="nbreofItems">{nbrofItems}</span>
            <FaCircle color="#dc3545" size="12px" />
          </div>
          <FaShoppingCart
            size="1.750rem"
            color="white"
            onClick={() => props.openCartModal(props.isOpenModal)}
            style={{ position: "absolute", top: "22px", right: "5px" }}
          />
        </div>
        <Cart />
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  isOpenModal: state.isOpenModal,
  ListItems: state.ListItems,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (payload) => dispatch(handleChange(payload)),
    openCartModal: (payload) => dispatch(openCartModal(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
