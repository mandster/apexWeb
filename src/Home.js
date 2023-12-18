import React from "react";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Home = () => {
  return (
    <div className="Home ">
      <Header />
      <Carousel />
      <br></br>
      <div className="content sub-container centered-text">
        <div className="company-description">
          <h2 className="company-name">Welcome to Apex</h2>
          <p className="tagline">
            Pioneering Excellence in Electric Switchgear
          </p>
          <p className="description">
            Since 1975, Apex has been a dedicated provider of cutting-edge
            electric motor safety and control devices. Our commitment to quality
            and innovation has made us a trusted and leading brand in the
            electric switchgear industry.
          </p>
          <p className="description">
            At Apex, each product undergoes rigorous testing to ensure unmatched
            reliability and performance. Our journey is marked by precision,
            innovation, and a relentless pursuit of perfection. Join us as we
            continue to empower industries with state-of-the-art solutions,
            setting new benchmarks in electrical switchgear technology.
          </p>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
