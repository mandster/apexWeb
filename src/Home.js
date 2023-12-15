import React from "react";
import Carousel from "./Carousel";
import Products from "./Products";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="Home">
      <Carousel />
      <div className="content">
        <h2>Who We Are</h2>
        <p>Paragraph about the company...</p>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
