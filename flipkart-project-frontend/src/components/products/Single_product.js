import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, setRr } from '../../actions/FlipCartActions';
import Navbar2 from '../Navbar2';
import '../products/Single_product.css'


function Single_product(props) {

    const [singleProduct, setSingleProduct] = useState([])
    const [all_rate_review, setall_rate_review] = useState([])
    var single_pr_id = props.match.params.id

    var pn = { ...singleProduct[0] }.productName;
    console.log("pn is==", pn);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:7000/list_products").then(function (res) {

            var all_product = res.data.data

            var single_product = all_product.filter(allP => allP._id == single_pr_id)
            setSingleProduct(single_product)
        });
    }, [])

    function cart(prmb) {
        if (user) {
            dispatch(addProductToCart({ ...prmb, qty: 1 }));
        } else {
            alert("please log in")
        }
    }
    function buy(id) {
        if (user) {
            props.history.push("/Buy/" + id)
        } else {
            alert("please log in")
        }
    }

    if (pn == "Mobile") {
        var productsList = singleProduct.map(function (prmob) {
            return <div key={prmob._id} className="sptv">

                <div className="sptv1 col-md-4">
                    <img className="spmimg" src={"http://localhost:7000/" + prmob.product_image} alt="saibaba" />
                    <div >
                        {user && <button className="sptvbtn" onClick={function () { cart(prmob) }}>CART</button>}
                        {user && <button className="sptvbtn2" onClick={function () { buy(prmob._id) }}>BUY</button>}
                    </div>
                </div>

                <div className="col-md-7" style={{ float: "right" }} >
                    <p className="vch4  ">Product Description</p>
                </div>
                <div className="col-md-7 sptv2" >
                    <div className=""></div>
                    <h3 style={{ marginBottom: 25 }}>{prmob.componyName}</h3>
                    <p>Model Name : {prmob.modelName} </p>
                    <p>Color :  {prmob.color} </p>
                    <p>Ram : {prmob.ram}</p>
                    <p>Rom : {prmob.rom}</p>
                    <p>Battery : {prmob.battery} </p>
                    <p>Display : {prmob.display} </p>
                    <p>Rear Camara : {prmob.rearCamara}</p>
                    <p>Front Camara :  {prmob.frontCamara}</p>
                    <p>Processor : {prmob.processor}</p>
                    <h5 className="mob_price"> ₹ {prmob.price}</h5>
                </div>

            </div>
        });
    } else if (pn == "Tv") {
        var tproductsList = singleProduct.map(function (tv) {
            return <div key={tv._id} className="sptv">

                <div className="sptv1 col-md-4">
                    <img className="sptvimg" src={"http://localhost:7000/" + tv.product_image} alt="saibaba" />
                    <div >
                        {user && <button className="sptvbtn" onClick={function () { cart(tv) }}>CART</button>}
                        {user && <button className="sptvbtn2" onClick={function () { buy(tv._id) }}>BUY</button>}
                    </div>
                </div>
                <div className="col-md-7" style={{ float: "right" }} >
                    <p className="vch4  ">Product Description</p>
                </div>
                <div className="sptv2 col-md-7" >
                    <h3 style={{ marginBottom: 25 }}>{tv.componyName}</h3>
                    <p>Model Name : {tv.modelName}</p>
                    <p>color : {tv.color} </p>
                    <p>screenType : {tv.screenType} </p>
                    <p>displaySize : {tv.displaySize} </p>
                    <p>screenType: {tv.screenType} </p>
                    <h5 className="mob_price"> ₹ {tv.price}</h5>
                </div>

            </div>
        });
    } else if (pn == "Laptop") {
        var lproductsList = singleProduct.map(function (prmob) {
            return <div key={prmob._id}>
                <div className="sptv1 col-md-4">
                    <div className="spl" >
                        <img src={"http://localhost:7000/" + prmob.product_image} />
                    </div>
                    <div >
                        {user && <button className="sptvbtn" onClick={function () { cart(prmob) }}>CART</button>}
                        {user && <button className="sptvbtn2" onClick={function () { buy(prmob._id) }}>BUY</button>}
                    </div>
                </div>
                <div className="col-md-7" style={{ float: "right" }} >
                    <p className="vch4  ">Product Description</p>
                </div>
                <div className="sptv2 col-md-7" >

                    <h3 style={{ marginBottom: 25 }}>{prmob.componyName} ,{prmob.modelName}</h3>
                    <p>processor : {prmob.processor}</p>
                    <p>color :  {prmob.color} </p>
                    <p>battery :  {prmob.battery} </p>
                    <p>ram :  {prmob.ram}</p>
                    <p>screenSize :  {prmob.screenSize}</p>
                    <p>processor :  {prmob.processor} </p>
                    <p>graphicProcessor :  {prmob.graphicProcessor} </p>
                    <h5 className="mob_price"> ₹ {prmob.price}</h5>
                </div>
            </div>
        });
    }
    else if (pn == "AC") {
        var aproductsList = singleProduct.map(function (ac) {
            return <div key={ac._id}>
                <div className="sptv1 col-md-4">
                    <img className="spacimg" src={"http://localhost:7000/" + ac.product_image} alt="saibaba" />
                    <div >
                        {user && <button className="sptvbtn" onClick={function () { cart(ac) }}>CART</button>}
                        {user && <button className="sptvbtn2" onClick={function () { buy(ac._id) }}>BUY</button>}
                    </div>
                </div>
                <div className="col-md-7" style={{ float: "right" }} >
                    <p className="vch4  ">Product Description</p>
                </div>
                <div className="sptv2 col-md-7" >
                    <h3 style={{ marginBottom: 25 }}>{ac.componyName}</h3>
                    <p>modelName:{ac.modelName}</p>
                    <p>ac Color  :   {ac.acColor} </p>
                    <p>cooling capacity  : {ac.coolingCapacity}</p>
                    <p>power consumption  :   {ac.powerConsumption} </p>
                    <p>type  :   {ac.type} </p>
                    <p>capacity  :   {ac.capacity} </p>
                    <p>energyRati  :   {ac.energyRating} </p>
                    <p>technology  :  {ac.technology} </p>
                    <p>turboMode   :  {ac.turboMode} </p>
                    <p>dustFilter  :   {ac.dustFilter} </p>
                    <h5 className="mob_price"> ₹ {ac.price}</h5>
                </div>

            </div>
        });
    } else if (pn == "Washing-Machine") {
        var wmproductsList = singleProduct.map(function (ac) {
            return <div key={ac._id}>
                <div className="sptv1 col-md-4">
                    <img className="sptvimg" src={"http://localhost:7000/" + ac.product_image} alt="saibaba" />
                    <div >
                        {user && <button className="sptvbtn" onClick={function () { cart(ac) }}>CART</button>}
                        {user && <button className="sptvbtn2" onClick={function () { buy(ac._id) }}>BUY</button>}
                    </div>
                </div>

                <div className="col-md-7" style={{ float: "right" }} >
                    <p className="vch4  ">Product Description</p>
                </div>

                <div className="sptv2 col-md-7" >
                    <h3 style={{ marginBottom: 25 }}>{ac.componyName}</h3>
                    <p>modelName:{ac.modelName}</p>
                    <p>Color  :   {ac.color} </p>
                    <p>Capacity  : {ac.capacity}</p>
                    <p>type  :   {ac.type} </p>
                    <p>hotwash  :   {ac.hotwash} </p>
                    <p>digitalDisplay  :   {ac.digitalDisplay} </p>
                    <p>childLock  :   {ac.childLock} </p>
                    <p>autoPowerOff  :  {ac.autoPowerOff} </p>
                    <p>width   :  {ac.width} </p>
                    <p>height  :   {ac.height} </p>
                    <h5 className="mob_price"> ₹ {ac.price}</h5>
                </div>

            </div>
        });
    }

    useEffect(() => {
        axios.get("http://localhost:7000/list_rate_review").then(function (res) {

            var all_rate_review = res.data.data;
            console.warn("all_rate_review", all_rate_review);

            var result = all_rate_review.filter(r => r.co_rr_id === single_pr_id);
            setall_rate_review(result);
            console.warn("result", result);

        });
    }, [])

    if (all_rate_review.length > 1) {

        var rr = all_rate_review.map(function (r) {
            return <div className="nn">
                <div className="rr_star">{r.star}</div>
                <div className="rr_textarea">{r.rr_textarea}</div>
            </div>

        })
    }
    /////////////////////////////////////////////////////////////////
    return (

        <div className="container-fluid sp">

            <div className="row">
                {tproductsList}
                {productsList}
                {lproductsList}
                {aproductsList}
                {wmproductsList}
            </div>

            {rr && <div className="col-md-7 vc">
                <p className="vch3">Ratings & Reviews</p>
                <div className="n"> {rr}</div>
            </div>}
            {!rr &&
                <div className="col-md-7 vb">

                    <p className="vch3">Ratings & Reviews</p>
                    <p className="vbp">Sorry ! Nothing To See Here</p>
                </div>

            }


        </div >
    )
}

export default Single_product
