export const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: "Add_To_Cart",
    data: data
  };
};

export const removeFromCart = (data) => {
  console.log("action removeFromCart called", data);
  return {
    type: "Remove_From_Cart",
    data: data
  };
};

export const emptyCart = () => {
  console.log("action emptyCart called");
  return {
    type: "Empty_Cart"
  };
};
