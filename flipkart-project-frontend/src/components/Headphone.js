import React from 'react'
import { Link } from 'react-router-dom'
import '../css/pagesCss/Headphone.css'


function Headphone() {
    return (
        <div className="headphone">
            <div className="headphone_left">

                <h3>Filters</h3>

                <h5>Price</h5>

                <Link exact to="/">
                    <p>100-200</p>
                </Link>

                <Link exact to="/">
                    <p>200-500</p>
                </Link>

                <Link exact to="/">
                    <p>500-1000</p>
                </Link>

                <Link exact to="/">
                    <p>1000 above</p>
                </Link>

            </div>


            <div className="headphone_right">
                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone1.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>
                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone2.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>
                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone3.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>

                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone7.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>

                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone5.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>


                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone6.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>


                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone6.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>
                <div className="headphone1">
                    <Link exact to="/">
                        <img src="/headphones/headphone6.jpeg" />
                        <h4>Jbl c150</h4>
                        <p style={{ color: "green" }}>upto 50% of</p>
                        <p class="">760 rs</p>
                    </Link>
                </div>






            </div>
        </div>
    )
}

export default Headphone
