import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NoPage from "./NoPage";
import Careers from "./components/Careers";
import Starters from "./Products/Starters";
import ControlSwitches from "./Products/ControlSwitches";
import LimitSwitches from "./Products/LimitSwitches";
import SubmersiblePanels from "./Products/SubmersiblePanels";
import Contactors from "./Products/Contactors";
import PlugsSockets from "./Products/PlugsSockets";
import PanelAccessories from "./Products/PanelAccessories";
import DirectOnlineStarters from "./Products/DirectOnlineStarters";
import StarDeltaStarters from "./Products/StarDeltaStarters";
import ReverseForwardStarters from "./Products/ReverseForwardStarters";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
   <> <div>

    </div>
    <BrowserRouter>
    < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Product/Starters" element={<Starters />} />
        <Route path="/Product/ControlSwitches" element={< ControlSwitches />} />
        <Route path="/Product/SubmersiblePanels" element={< SubmersiblePanels />} />
        <Route path="/Product/PanelAccessories" element={<PanelAccessories />} />
        <Route path="/Product/LimitSwitches" element={<LimitSwitches />} />
        <Route path="/Product/PlugsSockets" element={<PlugsSockets />} />
        <Route path="/Product/Contactors" element={<Contactors />} />
        <Route path="/Starters/DirectOnlineStarters" element={<DirectOnlineStarters />} />
        <Route path="/Starters/StarDeltaStarters" element={<StarDeltaStarters />} />
        <Route path="/Starters/ReverseForwardStarters" element={<ReverseForwardStarters />} />


        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter></>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
