import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
