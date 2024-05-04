import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
import StatusCode from "../store/utils/StatusCode";

const Products = () => {
  // const [products, getProducts] = useState([]);

  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <Alert key="primary">Loading...</Alert>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert key="primary" variant="danger">
        Oops..Something went wrong. try again.
      </Alert>
    );
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => {
    return (
      <div className="col-md-3 p-2">
        <Card
          key={product.id}
          className="mt-1 h-100"
          style={{ marginBottom: "10px" }}
        >
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              className="mt-2"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white">
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1 className="mt-2">Product Dashboard</h1>
      <div className="row p-3">{cards}</div>
    </>
  );
};

export default Products;
