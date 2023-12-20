import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductRow from "./components/ProductRow";
import Description from "./components/Description";
const Home = () => {
  return (
    <div className="Home ">
      <Header />
      <Carousel />
      <Description />
      <ProductRow />
      <Footer />
     </div> 
  );
};

export default Home;
