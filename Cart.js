import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&  // Agr cartData.length hai toh yeh run hoga
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  // console.log("Total amount ",amount);
  return (
    <>
      <div className="text-center">
        <Link to="/">Go To Product Link</Link>
        <h1>Cart Page</h1>
        <Container className="my-4 cart-page-container">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>₹{item.price}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="price-details">
            <div className="adjust-price">
              <span>Amount</span>
              <span>₹{amount}</span>
            </div>
            <div className="adjust-discount">
              <span>Discount(10%)</span>
              <span>₹{amount/10}</span>
            </div>
            <div className="adjust-total">
              <span>Total</span>
              <span>₹{amount - (amount/10)}</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
