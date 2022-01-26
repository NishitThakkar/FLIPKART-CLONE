import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRr } from '../actions/FlipCartActions'
import '../css/Rate_review.css'

function Rate_review(props) {

    const [single_order_rr, setSingle_order_rr] = useState([])
    const [star, setStar] = useState("")
    const [rr_textarea, setRr_textarea] = useState("")

    var co_rr_id = props.match.params.co_rr_id;
    var cn = props.match.params.componyName;

    console.warn("cn is", cn);
    console.warn("rrid is", co_rr_id);
    console.warn("single_order_rr is", single_order_rr);

    useEffect(() => {
        axios.get('http://localhost:7000/orders/list_orders').then((res) => {
            var all_orders = res.data.data
            var order = all_orders.filter(o => o._id == co_rr_id)
            setSingle_order_rr(order)
        })
    }, [])

    function setValue(e) {
        e.target.name == "Star" && setStar(e.target.value);
        e.target.name == "Rr_textarea" && setRr_textarea(e.target.value);
    }
    function rrCheck2(){
        false
    }
    function rrCheck() {
        var ss = {
            rr_textarea, star, co_rr_id
        };
        console.warn("cnn is=", cn);
        axios.post("http://localhost:7000/create_rate_review", ss).then(function (res) {
            console.log("48");
        });
    }

    var Single_order_rr = single_order_rr.map(function (rr) {
        return <div key="rr._id" className="rrp">
            <span style={{ fontSize: 25 }} > {rr.componyName} </span>
            <span style={{ fontSize: 25 }} > {rr.modelName} </span>
            <span style={{ fontSize: 25 }}> {rr.color}</span>
            <h5 > {rr.price}</h5>
        </div>
    })

    return (
        <div>
            <div className="rr_fd">
                <h4 className="rrrr">Ratings & Reviews</h4>
                <div className="">
                    {Single_order_rr}
                </div>
            </div>

            <div className="rrtp">
                <h5>Rate this product</h5>
                <p>
                    <select name="Star" value={star} style={{ color: "rgb(17, 102, 238)" }} onChange={function (e) { setValue(e) }} >
                        <option value="★ " onChange={function (e) { setValue(e) }}>★ </option>
                        <option value="★ ★" onChange={function (e) { setValue(e) }}>★ ★</option>
                        <option value="★ ★ ★" onChange={function (e) { setValue(e) }}>★ ★ ★ </option>
                        <option value="★ ★ ★ ★" onChange={function (e) { setValue(e) }}>★ ★ ★ ★ </option>
                        <option value="★ ★ ★ ★ ★" onChange={function (e) { setValue(e) }}>★ ★ ★ ★ ★</option>
                    </select><br /><br />
                </p>

                <div className="rtp">
                    <h5>Review this product</h5>
                    <textarea rows="6" cols="50" style={{ resize: "none" }}
                        name="Rr_textarea" value={rr_textarea} onChange={function (e) { setValue(e) }} ></textarea>
                </div>

                <div>
                    <p onClick={rrCheck2} >submited </p>
                    <button onClick={rrCheck} className="rrbtn">SUBMIT</button>
                </div>

            </div>


        </div>
    )
}

export default Rate_review
