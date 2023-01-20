import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../../Product/Product";

const Category = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <div>
      <h2 className="text-center fs-2 py-2">
        All {category[0].productCategory} products
      </h2>
      <div className="d-flex align-items-center justify-centent-center">
        {category.map((cat) => {
          return <Product key={cat._id} product={cat}></Product>;
        })}
      </div>
    </div>
  );
};

export default Category;
