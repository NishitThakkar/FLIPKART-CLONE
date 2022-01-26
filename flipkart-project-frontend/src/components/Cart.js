import React from 'react'
import '../css/Cart.css'
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { aCTR, dCTR, increaseCTR } from '../actions/FlipCartActions';

function Cart(props) {
    const user = useSelector(state => state.user);

    const loading = useSelector(state => state.loading)
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch()
    console.log("cart is", cart);

    function go() {
        props.history.push("/Login")
    }

    function fun(pid) {
        dispatch(increaseCTR(pid));
    }
    function fun2(pid) {
        dispatch(dCTR(pid));

    }
    function fun3(pid) {
        dispatch(aCTR(pid));
    }

    function buy(id) {

        props.history.push("/Buy/" + id)
        console.warn(id, "idd");
    }

    if (cart.length > 0) {

        var cart_items = cart.map(function (c) {
            return <div key={c._id} className="row cart_row">

                <div className="col-md-3" >
                    <img src={"http://localhost:7000/" + c.product_image} />
                </div>

                <div className="col-md-9">
                    <h3>{c.componyName} {c.modelName} </h3>
                    <li className="cart_b_li"> by- {c.b_name}</li>
                    <h4 className=""> ₹ {c.price * c.qty}</h4><br />
                    <div className="ss">
                        <button onClick={function () { fun2(c._id) }}>-</button>
                        <p classNam="ppppp"> {c.qty} </p>
                        <button onClick={function () { fun(c._id) }}>+</button>
                        <h6> <Link onClick={function () { fun3(c._id) }}>Remove</Link></h6>
                    </div>
                    {user && <button className="sptvbtn2" onClick={function () { buy(c._id) }}>BUY</button>}
                </div>
            </div>
        });
    }

    return (
        <div>
            {!user && <div className="cart_main">

                {!user &&
                    <div className="cart">
                        <img src="cart1.png" alt="" />
                        <h4>Missing Cart items?</h4>
                        <p>Login to see the items you added previously</p>
                        {!user && <button className="loginbtn11" onClick={go} >Login</button>}
                        {/* <Link exact to="/Login">Log In </Link> */}

                    </div>
                }

            </div>}
            {user && <div className="cart_main2">

                <div className="con">

                    {user && cart_items}
                </div>
            </div>}

            {/* {
                cart.length < 1 && <div className="cart">
                    <div>
                        <img src="cart1.png" alt="" />
                        <h4>Missing Cart items?</h4>
                        <p>Login to see the items you added previously</p>

                    </div>

                </div>
            } */}



        </div>

    )
}

export default Cart
