export const handleChange = (payload) => {
  return {
    type: "HANDLE_CHANGE",
    payload,
  };
};
export const openCartModal = (payload) => {
  return {
    type: "OPEN_CART_MODAL",
    payload,
  };
};
export const addToCart = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};
export const incrementQuantity = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};
export const decrementQuantity = (payload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};
