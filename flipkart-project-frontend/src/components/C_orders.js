import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function C_orders(props) {

    const [customerOrders, setCustomerOrders] = useState([])
    console.warn("customerOrders==========================================", customerOrders);

    const user = useSelector(state => state.user)
    const c_emaill = user.email
    useEffect(() => {

        axios.get('http://localhost:7000/orders/list_orders').then((res) => {

            if (res) {
                var list_order = res.data.data
                var b = list_order.filter(d => d.customer_email == c_emaill);
                setCustomerOrders(b);
            } else {
                alert("err")
            }
        })
    }, []);

    function cancel(id, ac) {
        if (ac == "cn") {
            axios.get('http://localhost:7000/delete_orders?oid=' + id).then(function () {

                axios.get('http://localhost:7000/orders/list_orders').then((res) => {

                    if (res) {
                        var list_order = res.data.data
                        var b = list_order.filter(d => d.customer_email == c_emaill);
                        setCustomerOrders(b);
                    } else {
                        alert("err")
                    }
                })
            })
        } else if (ac == "n") {
            alert("already delivered")

            axios.get('http://localhost:7000/delete_orders?oid=' + id).then(function () {

                axios.get('http://localhost:7000/orders/list_orders').then((res) => {

                    if (res) {
                        var list_order = res.data.data
                        var b = list_order.filter(d => d.customer_email == c_emaill);
                        setCustomerOrders(b);
                    } else {
                        alert("err")
                    }
                })
            })
        }

    }

    function abcd() {
        alert("plzz buy product first")
    }

    function rate_review(co_rr_id) {
        props.history.push("/Rate_review/" + co_rr_id)
        console.warn("co_rr_id=", co_rr_id);
    }
    // function rate_review(componyName) {
    //     props.history.push("/Rate_review/" + componyName)
    //     console.warn("componyName=", componyName);
    // }

    var customerOrdersTable = customerOrders.map((co) => {
        return <tr key={co._id}>
            <td>{co.productName}</td>
            <td>{co.componyName}</td>
            <td>{co.modelName}</td>
            <td>{co.price}</td>
            <td>{co.b_email}</td>
            {/* <td>{co.status}</td> */}
            <td >
                {co.status == "pending" ?
                    <p className="text1" >Pending</p> :
                    <p className="text2" >Delivered</p>
                }
            </td>

            <td>
                <button onClick={cancel}>
                    {co.status == "pending" ?
                        <button className="btn btn-dark" onClick={function () { cancel(co._id, "cn") }}>Cancle Order</button> :
                        <button className="btn btn-dark" style={{ color: "white", paddingLeft: 23, paddingRight: 23 }} onClick={function () { cancel(co._id, "n") }}>Delivered</button>
                    }
                </button>
            </td>
            <td>

                <button>
                    {co.status == "delivered" ?
                        <button className="btn btn-dark" style={{ color: "white" }} onClick={function () { rate_review(co._id) }}>rate & review</button> :
                        <button className="btn btn-dark" style={{ color: "white" }} onClick={function () { abcd() }}>rate & review</button>
                    }
                </button>
            </td>

        </tr>
    })

    return (
        <div>
            <table class="table table-striped table-dark container-fluid">
                <thead>
                    <tr>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">COMPONY NAME</th>
                        <th scope="col">MODEL NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">BUSSINESS EMAIL</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">CANCEL ORDER</th>
                        <th scope="col">Rate & Review</th>
                    </tr>
                </thead>

                <tbody>
                    {customerOrdersTable}
                </tbody>
            </table>
        </div>
    )
}
