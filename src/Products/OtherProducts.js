import React from 'react';
import limitswitch from "../image/panel accessories mcb.jpg";
import plugsockets from "../image/plugsockets.jpg";
import accessories from "../image/accessories.jpg";
import pushbutton from "../image/pushbutton.jpg";
import "./OtherProducts.css";

const OtherProducts = () => {
  return (
    <>
      <header>
        <h3 className="centered-text ">Limit Switches, Plug & Sockets, Push Button Stations, Panel Accessories</h3>
      </header>
      <div className="container">
        <div className="row equal-height-row">
          <div className="col-4 col-md-8">Limit switches are control devices commonly used in industrial and automation settings to detect the presence or position of objects. They are essential components in machinery and equipment, providing a means to monitor and control various processes.</div>
          <div className="col-10 col-md-8"><img src={limitswitch} alt="Limit Switches" className="product-image" /></div>
        </div>
        <div className="row equal-height-row">
          <div className="col-4 col-md-8">Industrial Metal Clad Plugs and Sockets are a sturdy solution for various heavy duty applications.</div>
          <div className="col-10 col-md-8"><img src={plugsockets} alt="Plug Sockets" className="product-image" /></div>
        </div>
        <div className="row equal-height-row">
          <div className="col-4 col-md-8">Push Button Station come in 2 way and 3 way configurations.</div>
          <div className="col-10 col-md-8"><img src={pushbutton} alt="Push Button" className="product-image" /></div>
        </div>
        <div className="row equal-height-row">
          <div className="col-4 col-md-8">Panel Accessories are used in various panel assemblies</div>
          <div className="col-10 col-md-8"><img src={accessories} alt="Panel Accessories" className="product-image" /></div>
        </div>
      </div>
    </>
  );
}

export default OtherProducts;
