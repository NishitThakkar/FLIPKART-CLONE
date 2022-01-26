import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import User_main from "./components/User_main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Cr_ac from "./components/Cr_ac";
import Login from "./components/Login";
import Cart from "./components/Cart";
import TopOffers from "./components/TopOffers";
import Headphone from "./components/Headphone";
import Mobiles from "./components/Mobiles";
// import Product_mobile from "./components/realme/Product_mobile";
import SellerLogin from "./components/SellerLogin";
import Sell from "./components/seller/Sell_mobile";
import Sell_products from "./components/Sell_products";
import Product_tv from "./components/products/Product_tv";
import Product_laptop from "./components/products/Product_laptop";
import Product_mobile from "./components/products/Product_mobile";
import Sell_mobile from "./components/seller/Sell_mobile";
import Sell_laptop from "./components/seller/Sell_laptop";
import Sell_tv from "./components/seller/Sell_tv";
import Electronics from "./components/products/Electronics";
import Admin from "./components/Admin";
import Buy from "./components/Buy";
import Seller_products from "./components/seller/Seller_products";
import Seller_orders from "./components/seller/Seller_orders";
import C_orders from "./components/C_orders";
import Mobile from "./components/products/Mobile";
import Product_ac from "./components/products/Product_ac";
import Sell_ac from "./components/seller/Sell_ac";
import Single_product from "./components/products/Single_product";
import Rate_review from "./components/Rate_review";
import ForgotPassword from "./components/ForgotPassword";
import P from "./components/products/P";
import About from "./components/About";
import Sell_washing_machine from "./components/seller/Sell_washing_machine";
import Product_Washing_machine from "./components/products/Product_Washing_machine";
// import Why_invest from "./components/Why_invest";
import Best_fb from "./components/Best_fb";
import Why_invest from "./components/Why_invest";
// import TopOffers from "././components/Forget-password

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          {/* <Navbar /> */}
          <Switch>


            {/* <Route path="/Best_fb" exact component={Best_fb} />
            <Route path="/" exact component={Why_invest} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/Navbar" exact component={Navbar} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Cr_ac" exact component={Cr_ac} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/TopOffers" exact component={TopOffers} />
            <Route path="/Headphone" exact component={Headphone} />
            <Route path="/Mobiles" exact component={Mobiles} />
            <Route path="/Product_mobile" exact component={Product_mobile} />
            <Route path="/SellerLogin" exact component={SellerLogin} />
            <Route path="/Sell" exact component={Sell} />
            <Route path="/Sell_products" exact component={Sell_products} />
            <Route path="/Product_tv" exact component={Product_tv} />
            <Route path="/Product_laptop" exact component={Product_laptop} />
            <Route path="/Sell_tv" exact component={Sell_tv} />
            <Route path="/Sell_tv/:id" exact component={Sell_tv} />
            <Route path="/Sell_laptop" exact component={Sell_laptop} />
            <Route path="/Sell_laptop/:id" exact component={Sell_laptop} />
            <Route path="/Electronics" exact component={Electronics} />
            <Route path="/Product_tv" exact component={Product_tv} />
            <Route path="/Product_laptop" exact component={Product_laptop} />
            <Route path="/Sell_mobile" exact component={Sell_mobile} />
            <Route path="/Sell_mobile/:id" exact component={Sell_mobile} />
            <Route path="/Sell_washing_machine" exact component={Sell_washing_machine} />
            <Route path="/Product_Washing_machine" exact component={Product_Washing_machine} />
            <Route path="/Sell_washing_machine/:id" exact component={Sell_washing_machine} />
            <Route path="/Admin" exact component={Admin} />
            <Route path="/Buy" exact component={Buy} />
            <Route path="/Buy/:id" exact component={Buy} />
            <Route path="/Seller_products" exact component={Seller_products} />
            <Route path="/Seller_orders" exact component={Seller_orders} />
            <Route path="/C_orders" exact component={C_orders} />
            <Route path="/mobile" exact component={Mobile} />
            <Route path="/mobile/:ac" exact component={Mobile} />
            <Route path="/Product_ac" exact component={Product_ac} />
            <Route path="/Sell_ac" exact component={Sell_ac} />
            <Route path="/Sell_ac/:id" exact component={Sell_ac} />
            <Route path="/Single_product" exact component={Single_product} />
            <Route path="/Single_product/:id" exact component={Single_product} />
            <Route path="/Rate_review" exact component={Rate_review} />
            <Route path="/Rate_review/:co_rr_id" exact component={Rate_review} />
            <Route path="/ForgotPassword" exact component={ForgotPassword} />
            <Route path="/P" exact component={P} />
            <Route path="/About" exact component={About} />
            <Route path="/P/:tvcn" exact component={P} />
            <Route path="/P/:accn" exact component={P} />
            <Route path="/P/:laptopcn" exact component={P} />

          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
