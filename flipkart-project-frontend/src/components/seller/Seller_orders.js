import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Seller_orders() {

    const [orders, setOrders] = useState([])
    const user = useSelector(state => state.user)
    const b_email = user.email
    useEffect(() => {

        axios.get('http://localhost:7000/orders/list_orders').then((res) => {

            if (res) {

                var a = res.data.data

                var b = a.filter(c => c.b_email == b_email);

                setOrders(b);

            } else {
                alert("err")
            }
        })
    }, []);

    function update(oid) {
        var ab = {
            detailes: { status: "delivered" },
            bid: oid,
            e: b_email
        }
        axios.post('http://localhost:7000/update_status', ab).then((res) => {
            axios.get('http://localhost:7000/orders/list_orders').then((res) => {
                if (res) {
                    var a = res.data.data
                    var b = a.filter(c => c.b_email == b_email);
                    setOrders(b);
                }
            })
        })
    }
    function deleted(id) {
        alert("Order Delivered")
        axios.get('http://localhost:7000/delete_orders?oid=' + id).then(function () {

            axios.get('http://localhost:7000/orders/list_orders').then((res) => {

                if (res) {
                    var a = res.data.data
                    var b = a.filter(c => c.b_email == b_email);
                    setOrders(b);
                }
            })
        })
    }

    var d = orders.map((u) => {
        return <tr key={u._id}>
            <td>{u.productName}</td>
            <td>{u.componyName}</td>
            <td>{u.modelName}</td>
            <td>{u.price}</td>
            <td>{u.customer_email}</td>
            {/* <td>{u.status}</td> */}

            <td >
                {u.status == "pending" ?
                    <p className="text1" >Pending</p> :
                    <p className="text2" >Delivered</p>
                }
            </td>



            <td>
                <button onClick={update}>
                    {u.status == "pending" ?
                        <button className="btn btn-light" onClick={() => { update(u._id) }}>Delivered</button> :
                        <button className="btn btn-light" onClick={() => { deleted(u._id) }}>Delivered</button>
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
                        <th scope="col">CUSTOMER EMAIL</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">DELEVERED</th>

                    </tr>
                </thead>
                <tbody>
                    {d}
                </tbody>
            </table>
        </div>
    )
}

export default Seller_orders
