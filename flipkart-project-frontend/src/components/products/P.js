import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../actions/FlipCartActions';
import Navbar2 from '../Navbar2';

function P(props) {

    const [tv, setTv] = useState([])
    const [ac, setAc] = useState([])
    const [laptop, setLeptop] = useState([])
    const [mobile, setMobile] = useState([])
    const [WashingMachine, setWashingMachine] = useState([])
    console.warn(WashingMachine, "WashingMachine=======================");
    var tvcn = props.match.params.tvcn;
    console.warn("tvcn", tvcn);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    function cart(prmb) {

        dispatch(addProductToCart({ ...prmb, qty: 1 }));
    }
    function buy(id) {

        props.history.push("/Buy/" + id)
        console.warn(id, "idd");
    }
    function sp(id) {
        props.history.push("/Single_product/" + id)
    }
    useEffect(() => {
        axios.get('http://localhost:7000/list_products').then((res) => {

            if (res) {
                var data = res.data.data
                var result1 = data.filter(i => i.productName == "Tv");
                var result2 = result1.filter(i1 => i1.componyName == tvcn);
                setTv(result2);

                var result3 = data.filter(j => j.productName == "AC");
                var result4 = result3.filter(i2 => i2.componyName == tvcn);
                setAc(result4);

                var result5 = data.filter(k => k.productName == "Laptop");
                var result6 = result5.filter(i3 => i3.componyName == tvcn);
                setLeptop(result6);

                var result7 = data.filter(l => l.productName == "Mobile");
                var result8 = result7.filter(i4 => i4.componyName == tvcn);
                setMobile(result8);

                var result9 = data.filter(m => m.productName == "Washing-Machine");
                var result10 = result9.filter(i5 => i5.componyName == tvcn);
                setWashingMachine(result10);

            } else {
                alert("err")
            }

        })
    }, []);

    if (tv) {

        var tvList = tv.map((prtv) => {
            return <div key={prtv._id} className="col-md-3 ptdiv">
                <Link onClick={function () { sp(prtv._id) }}>

                    <li className="tvli" >
                        <img src={"http://localhost:7000/" + prtv.product_image} />
                    </li>
                    <h5>{prtv.componyName} {prtv.modelName} </h5>
                    <li>{prtv.displaySize}</li>
                    <li> {prtv.color}</li>
                    <li> {prtv.screenType} </li>
                    <li> {prtv.resolution} </li>
                    <li>by- {prtv.b_name} </li>
                    <h5 className="laptop_price"> ₹ {prtv.price}</h5><br />
                </Link>
                {user && <button className="sptvbtn" onClick={function () { cart(prtv) }}>Add To Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(prtv._id) }}>Buy</button>}
            </div>

        });
    }
    if (ac) {

        var acList = ac.map(function (ac) {
            return <div key={ac._id} className="col-md-3" style={{ marginTop: 25 }} >
                <Link onClick={function () { sp(ac._id) }}>

                    <li style={{ marginBottom: 25 }} className="tvli">
                        <img src={"http://localhost:7000/" + ac.product_image} />
                    </li>
                    <h5>{ac.componyName} </h5>
                    <li>  {ac.modelName} </li>
                    <li> {ac.capacity} </li>
                    <li> {ac.energyRating} </li>
                    <li> {ac.type} </li>
                    <li> {ac.technology} </li>
                    <li>  {ac.acColor} </li>
                    <li> {ac.coolingCapacity} </li>
                    <li> {ac.powerConsumption} </li>
                    <li> {ac.turboMode} </li>
                    <li> {ac.dustFilter} </li>
                    <li> by - {ac.b_name} </li>
                    <h5 className="laptop_price"> ₹ {ac.price}</h5><br />
                </Link>
                {user && <button className="sptvbtn" onClick={function () { cart(ac) }}>Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(ac._id) }}>Buy</button>}
            </div>
        })
    }
    if (laptop) {

        var laptopList = laptop.map((prlaptop) => {
            return <div key={prlaptop._id} className="col-md-3" >
                <Link onClick={function () { sp(prlaptop._id) }}>

                    <li style={{ marginBottom: 15 }} className="tvli" >
                        <img src={"http://localhost:7000/" + prlaptop.product_image} />
                    </li>
                    <h5>{prlaptop.componyName} {prlaptop.modelName}</h5>
                    <li>  {prlaptop.processor} </li>
                    <li> {prlaptop.color} </li>
                    <li> {prlaptop.battery} </li>
                    <li> {prlaptop.ram} </li>
                    <li> {prlaptop.screenSize} </li>
                    <li> {prlaptop.graphicProcessor} </li>
                    <li> by- {prlaptop.b_name} </li>
                    <h5 className="laptop_price"> ₹ {prlaptop.price}</h5><br />
                </Link>

                {user && <button className="sptvbtn" onClick={function () { cart(prlaptop) }}>Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(prlaptop._id) }}>Buy</button>}
            </div>

        });

    }
    if (mobile) {
        var mobileList = mobile.map(function (prmob) {
            return <div key={prmob._id} className="col-md-3" style={{ marginBottom: 50 }}>
                <Link onClick={function () { sp(prmob._id) }}>

                    <li style={{ marginBottom: 15 }} className="mli" >
                        <img src={"http://localhost:7000/" + prmob.product_image} />
                    </li>
                    <h3>{prmob.componyName} {prmob.modelName} ({prmob.color} ,{prmob.ram})</h3>
                    <li>{prmob.ram} | {prmob.rom}</li>
                    <li> {prmob.display} </li>
                    <li> {prmob.rearCamara} | {prmob.frontCamara} </li>
                    <li> {prmob.battery} </li>
                    <li> {prmob.processor}</li>
                    <li> {prmob.price}</li>
                    <li> by- {prmob.b_name}</li>
                    <h4 className="mob_price2"> ₹ {prmob.price}</h4><br />
                </Link>
                {user && <button className="sptvbtn" onClick={function () { cart(prmob) }} style={{ marginBottom: 15 }}>Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(prmob._id) }} style={{ marginBottom: 15 }}>Buy</button>}

            </div>
        })
    }
    if (WashingMachine) {

        var wmList = WashingMachine.map(function (prmob) {
            return <div key={prmob._id} className="col-md-4" style={{ marginBottom: 50 }}>
                <Link onClick={function () { sp(prmob._id) }}>

                    <li style={{ marginBottom: 0 }} className="tvli" >
                        <img src={"http://localhost:7000/" + prmob.product_image} />
                    </li>
                    <h3>{prmob.componyName}  {prmob.type}</h3>
                    <li> Capacity : {prmob.capacity}</li>
                    <li> Height : {prmob.height}</li>
                    <li> Width : {prmob.width}</li>
                    <li> {prmob.price}</li>
                    <li> by- {prmob.b_name}</li>
                    <h4 className="mob_price2"> ₹ {prmob.price}</h4><br />
                </Link>
                {user && <button className="sptvbtn" onClick={function () { cart(prmob) }} style={{ marginBottom: 15 }}>Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(prmob._id) }} style={{ marginBottom: 15 }}>Buy</button>}

            </div>
        })
    }

    function back() {
        props.history.push("/Electronics")
    }

    return (
        <div>
            {/* <Navbar2 /> */}
            <h1 className="ph1">{tvcn}</h1>
            <div className="container ">
                <div className="row tv_info">
                    {tvList}
                    {acList}
                    {laptopList}
                    {mobileList}
                    {wmList}
                </div>
            </div>
        </div>
    )
}

export default P
