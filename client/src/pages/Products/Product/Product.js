import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    // _id,
    title,
    productImage,
    monthsUsed,
    seller,
    resellPrice,
    originalPrice,
    // postingTime,
    productCategory,
    location,
  } = product;
  return (
    <Col className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={productImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Used for {monthsUsed} months</ListGroup.Item>
          <ListGroup.Item>
            Price: {resellPrice}$ (original price: {originalPrice}$)
          </ListGroup.Item>
          <ListGroup.Item>Seller: {seller}</ListGroup.Item>
          <ListGroup.Item>Posted on: 26th Dec from {location}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link
            to={`/category/${productCategory}`}
            className="text-decoration-none"
          >
            {productCategory}
          </Link>
          <span>  </span>
          <Link className="text-decoration-none">Book Now</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
