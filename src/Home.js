import React from "react";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Home = () => {
  return (
    <div className="Home">
    <Header />
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
