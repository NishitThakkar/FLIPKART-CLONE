import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './seller/sell.css'
function Admin() {

    const [users, setUsers] = useState([]);
    const [allProducts, setAllProducts] = useState([])
    const b_Logo = users.b_Logo
    useEffect(() => {
        axios.get("http://localhost:7000/list_users").then(function (res) {
            setUsers(res.data.data)
        })
    }, [])

    function deleteUser(id, action) {
        if (action === "delete") {
            axios.get("http://localhost:7000/delete_user?did=" + id).then(function (res) {

                axios.get("http://localhost:7000/list_users").then(function (res) {
                    setUsers(res.data.data)

                })
            })
        }
    }

    // ====================================================
    useEffect(() => {
        axios.get('http://localhost:7000/list_products/mobiles').then((res) => {
            setAllProducts(res.data.data)
        })
    }, []);

    function deletePr(id, action) {
        if (action === "delete") {
            axios.get("http://localhost:7000/delete_product?pid=" + id).then(function (res) {

                axios.get("http://localhost:7000/list_products").then(function (res) {
                    setAllProducts(res.data.data)

                })
            })
        }
    }

    var allProductsList = allProducts.map(function (ap) {
        return <tr key={ap._id}>

            <td>
                <li></li>
            </td>

            <td>{ap.productName}</td>
            <td>{ap.componyName}</td>
            <td>{ap.modelName}</td>
            <td>{ap.b_name}</td>
            <td>{ap.price}</td>
            <td><button onClick={function () { deletePr(ap._id, "delete") }}>DELETE</button></td>
        </tr>
    })
    var userslist = users.map((u) => {
        return <tr key={u._id}>
            <td>
                <li></li>
            </td>

            <td>{u.userName}</td>
            <td>{u.email}</td>
            <td>{u.age}</td>
            <td>{u.mob}</td>
            <td>{u.password}</td>
            <td>{u.roll}</td>
            <td><button onClick={function () { deleteUser(u._id, "delete") }}>DELETE</button></td>
            <td><button>UPDATE</button></td>
            <td className="tdi"><img className="tdi" src={"http://localhost:7000/" + u.bLogo} alt="" /></td>
        </tr>
    })

    return (
        <center>
            <h2>USERS LIST</h2><br /><br />
            <table class="table table-striped table-dark">
                <ol>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">USER NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">AGE</th>
                        <th scope="col">MOBILE</th>
                        <th scope="col">PASSWORD</th>
                        <th scope="col">ROLL</th>
                        <th scope="col">DELETE</th>
                        <th scope="col">UPDATE</th>
                        <th scope="col">Logo</th>
                    </tr>


                    {userslist}

                </ol>



            </table>
            <br />
            <hr />
            <br />

            <h2>PRODUCT LIST</h2><br /><br />
            <table class="table table-striped ">
                <ol>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">productname</th>
                        <th scope="col">componyName</th>
                        <th scope="col">modelName</th>
                        <th scope="col">Business Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Delete</th>
                    </tr>

                    {allProductsList}
                </ol>

            </table>

        </center >


    )
}

export default Admin

