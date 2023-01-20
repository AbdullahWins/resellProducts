import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import Row from "react-bootstrap/Row";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://gamecheap-server.vercel.app/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-secondary py-5 rounded">
      <h2 className="text-center fs-1 py-3">All Products</h2>
      <div className="d-flex justify-content-evenly">
        <Row xs={1} md={3} className="g-3">
          {products.map((product) => {
            return <Product key={product._id} product={product}></Product>;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Products;
