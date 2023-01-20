import React from "react";
import CategoryCard from "../../Home/CategoryCard";

const Categories = () => {
  const categories = ["playStation", "xbox", "steamDeck"];
  const img = [
    "https://cdn.mos.cms.futurecdn.net/vVVviL9q4fhrHWqB4CGMkV.jpg",
    "https://pbs.twimg.com/media/FJpMkbPUUAE_XdK.jpg",
    "https://assets2.rockpapershotgun.com/how-to-take-a-screenshot-on-the-steam-deck.jpg",
  ];

  return (
    <div>
      <h2 className="text-center fs-1 py-3">Product Categories</h2>
      <div className="d-flex align-items-center justify-content-center">
        {categories.map((category, i) => {
          return (
            <CategoryCard
              key={i}
              category={category}
              img={img[i]}
            ></CategoryCard>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
