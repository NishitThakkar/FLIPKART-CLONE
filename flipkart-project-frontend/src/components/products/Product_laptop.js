import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../actions/FlipCartActions';
import Navbar2 from '../Navbar2';

function Product_laptop(props) {

    const user = useSelector(state => state.user)

    const [productsLaptop, setPoductsLaptop] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:7000/list_products/laptop').then((res) => {
            console.log(res.data);
            setPoductsLaptop(res.data.data);
        })
    }, []);


    // function doAction(id, action) {
    //     if (action === "delete") {
    //         axios.get('http://localhost:7000/delete_product/laptop?did=' + id).then((res) => {

    //             axios.get('http://localhost:7000/list_products/laptop').then((res) => {

    //                 setPoductsLaptop(res.data);
    //             })
    //         })
    //     } else {
    //         console.log("err");
    //     }
    // }

    // function doAction2(id) {
    //     props.history.push("Sell_laptop/" + id)
    // }
    function buy(id, pn) {

        props.history.push("/Buy/" + id)
    }

    function cart(prl) {
        dispatch(addProductToCart({ ...prl, qty: 1 }));
    }
    function sp(id) {
        props.history.push("/Single_product/" + id)
    }


    var productsList = productsLaptop.map((prlaptop) => {
        return <div key={prlaptop._id} className="col-md-3" >
            <Link onClick={function () { sp(prlaptop._id) }}>
                <li className="tvli" >
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
            </Link>

            <h5 className="laptop_price"> ₹ {prlaptop.price}</h5><br />

            {/* {user && user.roll == "vendor" && <button className="btn btn-danger" onClick={function () { doAction(prlaptop._id, "delete") }}>delete</button>}
            {user && user.roll == "vendor" && <button className="btn btn-danger" onClick={function () { doAction2(prlaptop._id, "update") }}>update</button>} */}
            <div className="a7">

                {user && <button className="sptvbtn" onClick={function () { cart(prlaptop) }}>Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(prlaptop._id, prlaptop.componyName) }}>Buy</button>}
            </div>
        </div>

    });


    function funnn(laptopcn) {

        if (laptopcn) {

            props.history.push("/P/" + laptopcn)
            alert(laptopcn)
        }
    }
    return (
        <div className="tv_first container-fluid">
            <Navbar2 />
            <div className="row tv_first_row">
                <div className="col-md-2 mobi " onClick={function () { funnn("hp") }}>
                    <Link>
                        <img src="../laptop/images.jpeg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi " onClick={function () { funnn("dell") }}>
                    <Link>
                        <img src="../laptop/images (1).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi mobi1 " onClick={function () { funnn("lenovo") }}>
                    <Link>
                        <img src="../laptop/images (2).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi  " onClick={function () { funnn("mi") }}>
                    <Link>
                        <img src="../laptop/images (3).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi " onClick={function () { funnn("acer") }}>
                    <Link>
                        <img src="../laptop/images (4).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi " onClick={function () { funnn("asus") }}>
                    <Link>
                        <img src="../laptop/images (5).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
            </div>


            <h3 className=" mob_h3">Laptop</h3>

            <div className="tv_first">

                <div className="tv_info">
                    {productsList}

                </div>
            </div>

        </div>
    )
}

export default Product_laptop
