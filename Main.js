import React, { useEffect } from "react";
import { addToCart, removeFromCart} from "../redux/action";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("result in main component from saga ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <>
      <div className="text-center my-2">
        <div className="product-container">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                style={{ width: "18rem" }}
                className="my-2 mx-4"
              >
                <Card.Img variant="top" src={item.photo} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Color: {item.color}</Card.Text>
                  <Card.Text>Price: ₹{item.price}</Card.Text>
                  <Card.Text>Category: {item.category}</Card.Text>
                  <Card.Text>Brand: {item.brand}</Card.Text>
                  <Button
                    variant="outline-success"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    variant="outline-danger"
                    style={{ marginLeft: "5px" }}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove To Cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
