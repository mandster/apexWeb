import Carousel from "./components/Carousel";
import ProductRow from "./components/ProductRow";
import Description from "./components/Description";
const Home = () => {
  return (
    <div className="Home ">
      <Carousel />
      <Description />
      <ProductRow />
     </div> 
  );
};

export default Home;
