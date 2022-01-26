import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import '../css/Buy.css'
function Buy(props) {
    const [mproduct, setmProduct] = useState([]);
    const [ltproduct, setlProduct] = useState([]);
    const [tvproduct, settvmProduct] = useState([]);
    const [acproduct, setacmProduct] = useState([]);

    console.warn("mproduct==", mproduct);
    var pn = { ...mproduct[0] }.productName;
    console.warn("pn==", pn);


    const user = useSelector(state => state.user)
    const userName = user.userName
    const address = user.address
    const email = user.email
    // var pn = props.match.params.pn;
    console.warn("emailllllllllllllllllllll-----------------", email);
    var id = props.match.params.id;
    console.warn(id);
    useEffect(() => {
        axios.get('http://localhost:7000/list_products').then((res) => {

            if (res) {
                var all_pr = res.data.data
                var mpr = all_pr.filter(melitem => melitem._id == id);
                // var mob_pr = mpr.filter(mitem => mitem.productName == "Mobile");
                setmProduct(mpr);

                var tpr = all_pr.filter(telitem => telitem._id == id);
                var tv_pr = tpr.filter(titem => titem.productName == "Tv");
                settvmProduct(tv_pr);
                // console.warn("pt", tvproduct);

                var lpr = all_pr.filter(lelitem => lelitem._id == id);
                var lt_pr = lpr.filter(litem => litem.productName == "Laptop");
                setlProduct(lt_pr);
                // console.warn("pl", ltproduct);

                var apr = all_pr.filter(aelitem => aelitem._id == id);
                var ac_pr = apr.filter(aitem => aitem.productName == "Ac");
                setacmProduct(ac_pr);
                // console.warn("pa", acproduct);

                var wpr = all_pr.filter(welitem => welitem._id == id);
                var wm_pr = wpr.filter(aitem => aitem.productName == "Washing-Machine");
                setacmProduct(wm_pr);
                // console.warn("pa", acproduct);

            }

        })
    }, []);

    // if (mproduct.productName == "Mobile") {
    if (pn == "Mobile") {
        var productsList = mproduct.map(function (prmob) {
            return <div key={prmob._id}>
                <h3>{prmob.componyName} ,{prmob.modelName}</h3>
                <li> {prmob.color} </li>
                <li> {prmob.ram}</li>
                <li> {prmob.rom}</li>
                <li> {prmob.battery} </li>
                <li> {prmob.display} </li>
                <li> {prmob.rearCamara}</li>
                <li> {prmob.frontCamara}</li>
                <li>{prmob.processor}</li>
                <h5 className="mob_price"> ₹ {prmob.price}</h5>
            </div>
        });
    } else if (pn == "Laptop") {
        var lproductsList = mproduct.map(function (prmob) {
            return <div key={prmob._id}>
                <h3>{prmob.componyName} ,{prmob.modelName}</h3>
                <li>{prmob.processor}</li>
                <li> {prmob.color} </li>
                <li> {prmob.battery} </li>
                <li> {prmob.ram}</li>
                <li> {prmob.screenSize}</li>
                <li> {prmob.processor} </li>
                <li> {prmob.graphicProcessor} </li>
                <h5 className="mob_price"> ₹ {prmob.price}</h5>
            </div>
        });
    } else if (pn == "Tv") {
        var tproductsList = mproduct.map(function (tv) {
            return <div key={tv._id}>
                <h3>{tv.componyName} ,{tv.modelName}</h3>
                <li>{tv.processor}</li>
                <li> {tv.color} </li>
                <li> {tv.ram}</li>
                <li> {tv.screenType} </li>
                <li> {tv.displaySize} </li>
                <li> {tv.resolution} </li>
                <h5 className="mob_price"> ₹ {tv.price}</h5>
            </div>
        });
    } else if (pn == "AC") {
        var aproductsList = mproduct.map(function (ac) {
            return <div key={ac._id}>
                <h3>{ac.componyName} ,{ac.modelName}</h3>
                <li> {ac.acColor} </li>
                <li> {ac.coolingCapacity}</li>
                <li> {ac.powerConsumption} </li>
                <li> {ac.type} </li>
                <li> {ac.capacity} </li>
                <li> {ac.energyRating} </li>
                <li> {ac.technology} </li>
                <li> {ac.turboMode} </li>
                <li> {ac.dustFilter} </li>
                <h5 className="mob_price"> ₹ {ac.price}</h5>
            </div>
        });
    } else if (pn == "Washing-Machine") {
        var wmproductsList = mproduct.map(function (wm) {
            return <div key={wm._id}>
                <h3>{wm.componyName} ,{wm.modelName}</h3>
                <li>Color : {wm.color} </li>
                <li>Capacity :{wm.capacity}</li>
                <li>type : {wm.type} </li>
                <li>hotwash : {wm.hotwash} </li>
                <li>digitalDisplay : {wm.digitalDisplay} </li>
                <li>childLock : {wm.childLock} </li>
                <li>autoPowerOff :{wm.autoPowerOff} </li>
                <li>width :{wm.width} </li>
                <li>height : {wm.height} </li>
                <h5 className="mob_price"> ₹ {wm.price}</h5>
            </div>
        });
    }

    // function buyItem() {
    //     var c = { ...mproduct[0] }
    //     delete c._id
    //     console.log("c is", c);
    //     var b = {
    //         ...c, customer_email: email, status: "pending"
    //     }
    //     axios.post("http://localhost:7000/orders", b).then(function (res) {
    //         alert("thank you")
    //     })
    // }
    function buyItem() {
        var c = { ...mproduct[0] }

        console.log("c is", c);
        var b = {
            ...c, customer_email: email, status: "pending"
        }
        axios.post("http://localhost:7000/orders", b).then(function (res) {
            alert("thank you")
        })
    }
    // var productsList = mproduct.map(function (prmob) {
    //     return <div key={prmob._id}>
    //         <h3>{prmob.componyName} ,{prmob.modelName}</h3>
    //         <li> {prmob.color} </li>
    //         <li> {prmob.ram}</li>
    //         <li> {prmob.rom}</li>
    //         <li> {prmob.battery} </li>
    //         <li> {prmob.display} </li>
    //         <li> {prmob.rearCamara}</li>
    //         <li> {prmob.frontCamara}</li>
    //         <li>{prmob.processor}</li>
    //         <h5> ₹ {prmob.price}</h5>
    //     </div>
    // });


    return (
        <div className="buy_body">
            <div className="buy">
                <div className="buy_f">
                    <p className="buy_p"><i class="fa fa-solid fa-forward "></i>Login</p>
                    <p className="buy_p2">{userName}</p>

                </div>

                <div className="buy_f">
                    <p className="buy_p"><i class="fa fa-solid fa-forward "></i> Delivery Address</p>
                    <p className="buy_p2">{address}</p>
                </div>


                <div className="buy_f">
                    <p className="buy_p buy_p3"><i class="fa fa-solid fa-forward "></i> ORDER SUMMARY</p>
                    <p className="buy_p2">{tproductsList}</p>
                    <p className="buy_p22">{wmproductsList}</p>
                    <p className="buy_p2">{productsList}</p>
                    <p className="buy_p2">{lproductsList}</p>
                    <p className="buy_p2">{aproductsList}</p>

                </div>

                <div className="buy_f buy_b">
                    <p className="buy_p"><i class="fa fa-solid fa-forward "></i>order confermation email will b sent to <span className="buy_span">{email}</span></p>
                    <button onClick={function () { buyItem() }}> continue</button>

                </div>
            </div>

        </div>
    )
}

export default Buy
