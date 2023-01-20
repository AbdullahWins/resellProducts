import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ps5 from "../../assets/ps5.jpg";
import xbox from "../../assets/xbox.jpg";
import steamDeck from "../../assets/steamDeck.jpg";
import Products from "../Products/Products";
import Promoted from "../Products/Promoted/Promoted";
import Categories from "../Products/Categories/Categories";
import MobileApp from "../MobileApp/MobileApp";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="text-center p-2">
        <h2>Game Cheap</h2>
        <p>the largest marketplace for used consoles</p>
      </section>
      <section>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={ps5} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={xbox} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={steamDeck} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="p-2">
        <Promoted></Promoted>
      </section>
      <section className="p-2">
        <Categories></Categories>
      </section>
      <section className="p-2">
        <Products></Products>
      </section>
      <section className="p-2">
        <MobileApp></MobileApp>
      </section>
    </>
  );
};

export default Home;
