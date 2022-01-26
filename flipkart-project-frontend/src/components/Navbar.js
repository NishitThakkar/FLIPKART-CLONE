import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
    function abcd() {
        alert("Only Electronics Products are Available")
    }
    return (
        <div className="nav">
            <div className="nav1">
                <Link exact to="/#" onClick={abcd}>
                    <img src="nav1.png" />
                    <h6>Top Offers</h6>
                </Link>
            </div>

            <div className="nav2">
                <Link exact to="/#" onClick={abcd}>
                    <img src="nav2.png" />
                    <h6>Grocery</h6>
                </Link>
            </div>

            <div className="nav3">
                <Link exact to="/Product_mobile">
                    <img src="nav3.png" />
                    <h6>Mobile</h6>
                </Link>
            </div>

            <div className="nav4">
                <Link exact to="/" onClick={abcd}>
                    <img src="nav4.png" />
                    <h6>Fashion</h6>
                </Link>
            </div>

            <div className="nav5">
                <Link exact to="/Electronics" >
                    <img src="nav5.png" />
                    <h6>Electronics</h6>
                </Link>
            </div>

            <div className="nav6">
                <Link exact to="/" onClick={abcd}>
                    <img src="nav6.png" />
                    <h6>Home</h6>
                </Link>
            </div>

            <div className="nav7">
                <Link exact to="/" onClick={abcd}>
                    <img src="nav7.png" />
                    <h6>Appliances</h6>
                </Link>
            </div>

            <div className="nav8">
                <Link exact to="/" onClick={abcd}>
                    <img src="nav8.png" />
                    <h6>Travel</h6>
                </Link>
            </div>

            <div className="nav9">
                <Link exact to="/" onClick={abcd}>
                    <img src="nav9.png" />
                    <h6>Beauty & Toys</h6>
                </Link>
            </div>


        </div>
    )
}



export default Navbar


