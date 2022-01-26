import React from "react";
import "../css/Header.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Home from "./Home";
import { LOGOUT_USER } from "../actions/FlipCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch()

  function logout() {
    dispatch(LOGOUT_USER());
    // props.history.push("/Login");
  }

  return (
    <header>
      <div className="logo">
        <Link exact to="/">
          <img src="fk_logo.png" className="logo_img" />
          <p className="lp">
            <span className="lspan1">Explore</span>
            <span className="lspan2">Plus</span>
            <span className="logo_plus" ><img src="plus_aef861.png" /></span>
          </p>
        </Link>
      </div>


      <div className="sp">
        <input type="text" className="spp" placeholder="Serch For Products, Brands & More" />
        <i class="fa fa-search"></i>
      </div>


      <div class="login">
        {!user && <button className="login_btn"><Link exact to="/Login">Login</Link></button>}
        {/* {!user && <Link exact to="/Login" className="login_btn">Login </Link>} */}
        {user && <span className="spnn">{user.userName}</span>}
      </div>

      {/* {user && <Link exact to="/Login" onClick={logout} className="login_btn2">Log Out </Link>} */}
      {user && <button className="login_btn" onClick={logout}><Link exact to="/Login">Log Out</Link></button>}


      <div className="more">

        <p className="morebtn">More
          <i class="fa fa-solid fa-chevron-down"></i>        </p>

        <div className="more_content">
          {user && user.roll == "vendor" && <Link exact to="/Seller_orders" style={{ color: 'black', padding: '12px 16px', display: 'block' }} ><i class="fas fa-shopping-bag"></i>Your Orders</Link>}
          {user && user.roll == "vendor" && <Link exact to="/Seller_products" style={{ color: 'black', padding: '12px 16px', display: 'block' }} ><i class="fas fa-shopping-basket"></i>Your Products</Link>}
          {user && user.roll == "vendor" && <Link exact to="/Sell_products" style={{ color: 'black', padding: '12px 16px', display: 'block' }} ><i class="fas fa-shopping-bag"></i>Sell On Flipkart</Link>}
          {user && user.roll == "customer" && <Link exact to="/C_orders" style={{ color: 'black', padding: '12px 16px', display: 'block' }} ><i class="fas fa-shopping-bag"></i>Orders</Link>}
          {user && user.roll == "customer" && <Link exact to="/SellerLogin" style={{ color: 'black', padding: '12px 16px', display: 'block' }} ><i class="fas fa-shipping-fast"></i>Become a seller ?</Link>}
          <Link exact to="#" style={{ color: 'black', padding: '12px 16px', display: 'block' }}><i class="fa fa-solid fa-bell"></i>Notification Preference</Link>
          <Link exact to="#" style={{ color: 'black', padding: '12px 16px', display: 'block' }}><i class="fa fa-solid fa-question"></i>24 * 7 Customer Care</Link>
          <Link exact to="#" style={{ color: 'black', padding: '12px 16px', display: 'block' }}><i class="fas fa-expand-alt"></i>Advertise</Link>
          <Link exact to="#" style={{ color: 'black', padding: '12px 16px', display: 'block' }}><i class="fas fa-arrow-down"></i>Download App</Link>
          <Link exact to="/Admin" style={{ color: 'black', padding: '12px 16px', display: 'block' }} >Admin Panel</Link>
        </div>

      </div>

      <Link exact to="/cart">
        <div className="login ci" style={{ color: "white" }}>
          <h5>Cart</h5>
          <i class="fa fa-cart-plus"></i>
        </div>
      </Link>

      {/* <div className="abc">
        <p className="abcd">1</p>
      </div> */}
    </header>
  );
}

export default Header;
