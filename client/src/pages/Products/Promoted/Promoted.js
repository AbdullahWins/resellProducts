import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Row from "react-bootstrap/Row";

const Promoted = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://gamecheap-server.vercel.app/promoted`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="text-center fs-1 py-3">Advertised Products</h2>
      <div className="d-flex align-items-center justify-content-center">
        <Row xs={1} md={3} className="g-3">
          {products.map((product) => {
            return <Product key={product._id} product={product}></Product>;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Promoted;
