import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Seller_products(props) {
    const [Sproducts, setSproducts] = useState([])

    const user = useSelector(state => state.user)
    const s_email = user.email;

    useEffect(() => {

        axios.get('http://localhost:7000/list_products').then((res) => {

            if (res) {
                var rss = res.data.data

                var result = rss.filter(rr => rr.b_email == s_email);

                setSproducts(result);
            } else {
                alert("err")
            }

        })
    }, []);

    function Delete(id) {
        axios.get("http://localhost:7000/delete_product?pid=" + id).then(function () {

            axios.get('http://localhost:7000/list_products').then((res) => {
                if (res) {
                    var rss = res.data.data
                    var result = rss.filter(rr => rr.b_email == s_email);
                    console.warn(result);
                    setSproducts(result);
                } else {
                    alert("err")
                }
            })
        })
    }

    function update(id, pn) {
        if (pn === "Mobile") {
            props.history.push("/Sell_mobile/" + id)
            alert(id)
        } else if (pn === "Tv") {
            props.history.push("/Sell_tv/" + id)
            alert(id)
        } else if (pn === "Laptop") {
            props.history.push("/Sell_laptop/" + id)
            alert(id)
        }
        else if (pn === "AC") {
            props.history.push("/Sell_ac/" + id)
            alert(id)
        }
        else if (pn === "Washing-Machine") {
            props.history.push("/Sell_washing_machine/" + id)
            alert(id)
        }
    }

    var products = Sproducts.map((u) => {
        return <tr key={u._id}>
            <td>{u.productName}</td>
            <td>{u.componyName}</td>
            <td>{u.modelName}</td>
            <td>{u.price}</td>
            <td>
                <button>
                    <button className="btn btn-dark" onClick={function () { Delete(u._id) }}>DELETE</button>
                </button>
            </td>
            <td>
                <button>
                    <button className="btn btn-dark" onClick={function () { update(u._id, u.productName) }}>UPDATE</button>
                </button>
            </td>

        </tr >
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
                        <th scope="col">delete</th>
                        <th scope="col">update</th>

                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}

export default Seller_products
