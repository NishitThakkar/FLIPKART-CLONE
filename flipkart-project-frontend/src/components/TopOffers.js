import React from 'react'
import { Link } from 'react-router-dom'
import '../css/pagesCss/To.css'

function TopOffers() {
    return (
        <div>
            <h3>Top Offers</h3>
            <div className="dod" style={{ marginTop: "25px" }}>
                <div className="dod_1">
                    <Link exact to="/#">
                        <img src="dod1.jpg" />
                        <h4>Headphone</h4>
                        <p style={{ color: "green" }}>upto 70% of</p>
                        <p class="dod_p">Boat, jbl & more</p>
                    </Link>
                </div>

                <div className="dod_2">
                    <Link exact to="/#">
                        <img src="dod2.jpg" />
                        <h4>Car & Bike Accessories</h4>
                        <p style={{ color: "green" }}>upto 70% of</p>
                        <p class="dod_p">Top Selling</p>
                    </Link>
                </div>

                <div className="dod_3">
                    <Link exact to="/">
                        <img src="dod3.jpg" />
                        <h4>Headphone</h4>
                        <p style={{ color: "green" }}>upto 70% of</p>
                        <p class="dod_p"> Boat, jbl & more</p>
                    </Link>
                </div>

                <div className="dod_4">
                    <Link exact to="/">
                        <img src="dod4.jpg" />
                        <h4>Power Banks</h4>
                        <p style={{ color: "green" }}>upto 70% of</p>
                        <p class="dod_p">Intex, Ambrane & More</p>
                    </Link>
                </div>

                <div className="dod_5">
                    <Link exact to="/">
                        <img src="dod5.jpg" />
                        <h4>Sports & Fitness</h4>
                        <p style={{ color: "green" }}>upto 70% of</p>
                        <p class="dod_p"> Shop Now</p>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default TopOffers
