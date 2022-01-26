import React from 'react'
import { Link } from 'react-router-dom'
import '../css/pagesCss/Mobiles.css'

function Mobiles() {
    return (
        <div className="mobile_main">
            <div className="mob_left">
                <h3>Filters</h3>

                <h5>Price</h5>

                <Link exact to="/">
                    <p>5000-10000</p>
                </Link>

                <Link exact to="/">
                    <p>10000-15000</p>
                </Link>

                <Link exact to="/">
                    <p>15000-20000</p>
                </Link>

                <Link exact to="/">
                    <p>20000-40000</p>
                </Link>

                <Link exact to="/">
                    <p>40000 above</p>
                </Link>

            </div>

            <div className="mob_right">

                <Link exact to="/Product_mobile">
                    <img src="/mobiles/all_mobiles.jpg" />
                    <h5>Mobile</h5>
                </Link>
                {/* 
                <div className="mob_compony">

                    <Link exact to="/Product_mobile">
                        <div className="mob_compony1">
                            <img src="/mobiles/mob1.jpg" />
                            <h5>Realme</h5>
                        </div>
                    </Link>


                    <div className="mob_compony1">
                        <img src="/mobiles/mob2.jpg" />
                        <h5>Oppo</h5>
                    </div>

                    <div className="mob_compony1">
                        <img src="/mobiles/mob3.jpg" />
                        <h5>Samsung</h5>
                    </div>

                    <div className="mob_compony1">
                        <img src="/mobiles/mob4.jpg" />
                        <h5>Mi</h5>
                    </div>

                    <div className="mob_compony1">
                        <img src="/mobiles/mob5.jpg" />
                        <h5>I Phone</h5>
                    </div>


                    <div className="mob_compony1">
                        <img src="/mobiles/mob6.jpg" />
                        <h5>Infinix</h5>
                    </div>





                </div> */}
            </div>
        </div >
    )
}

export default Mobiles
