import React from 'react'
import { Link } from 'react-router-dom'

function Electronics() {

    return (

        <div>

            <div className="Sell_product_main ">

                <h3 className="mob_h3">Select A Product</h3>

                <div className="Sell_product_cat">

                    <div className="Sell_product_home">
                        <Link exact to="/Product_mobile">
                            <img src="mobilew.jpg" />
                            <h2>Mobile</h2>
                        </Link>
                    </div>

                    <div className="Sell_product_home">
                        <Link exact to="/Product_tv">
                            <img src="tvw.jpg" />
                            <h2>Tv</h2>
                        </Link>
                    </div>


                    <div className="Sell_product_home">
                        <Link exact to="/Product_laptop">
                            <img src="laptopw.jpg" />
                            <h2>Laptop</h2>
                        </Link>
                    </div>

                    <div className="Sell_product_home">
                        <Link exact to="/Product_ac">
                            <img src="acw.jpg" />
                            <h2>Ac</h2>
                        </Link>
                    </div>

                    <div className="Sell_product_home">
                        <Link exact to="/Product_Washing_machine">
                            <img src="download.jpeg" />
                            <h2>Washing Machine</h2>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Electronics
