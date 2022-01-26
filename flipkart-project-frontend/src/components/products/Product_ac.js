import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../actions/FlipCartActions';
import Navbar2 from '../Navbar2'

function Product_ac(props) {

    const [poductsAc, setPoductsAc] = useState([]);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('http://localhost:7000/list_products/ac').then((res) => {
            console.log(res.data);
            setPoductsAc(res.data.data);
        })
    }, []);

    function cart(ac) {
        dispatch(addProductToCart({ ...ac, qty: 1 }));
    }
    function buy(id) {
        props.history.push("/Buy/" + id)
    }
    function sp(id) {
        props.history.push("/Single_product/" + id)
    }

    var productList = poductsAc.map(function (ac) {
        return <div key={ac._id} className="col-md-3" >
            <Link onClick={function () { sp(ac._id) }}>
                <li className="tvli" >
                    <img src={"http://localhost:7000/" + ac.product_image} />
                </li>
                <h5>{ac.componyName} </h5>
                <li>  {ac.modelName} </li>
                <li> {ac.capacity} </li>
                <li> {ac.energyRating} </li>
                <li> {ac.type} </li>
                <li> {ac.technology} </li>
                <li>  {ac.acColor} </li>
                <li> by - {ac.b_name} </li>
                {/* <li> {ac.coolingCapacity} </li> */}
                {/* <li> {ac.powerConsumption} </li> */}
                {/* <li> {ac.turboMode} </li> */}
                {/* <li> {ac.dustFilter} </li> */}
            </Link>
            <h5 className="laptop_price"> ₹ {ac.price}</h5><br />
            <div className="a7">

                {user && <button className="sptvbtn" onClick={function () { cart(ac) }}>Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(ac._id) }}>Buy</button>}
            </div>
        </div>
    })

    function funnn(accn) {
        props.history.push("P/" + accn)
        alert(accn)
    }
    return (

        <div className="tv_first container-fluid">
            <Navbar2 />
            <div className="row tv_first_row">
                <div className="col-md-2 mobi" onClick={function () { funnn("HITACHI") }}>
                    <Link>
                        <img src="../ac/download.png"></img>


                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("BLUE STAR") }}>
                    <Link>
                        <img src="../ac/images.jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("LG") }}>
                    <Link>
                        <img src="../ac/download (1).png"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi " onClick={function () { funnn("TCL") }}>
                    <Link>
                        <img src="../ac/download (2).png"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("PNASONIC") }}>
                    <Link>
                        <img src="../ac/download.jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi" onClick={function () { funnn("SAMSUNG") }}>
                    <Link>
                        <img src="../ac/download (3).png"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
            </div>


            <h3 className=" mob_h3">AC</h3>

            <div className="tv_first">

                <div className="tv_info">
                    {productList}
                </div>
            </div>

        </div>

    )
}

export default Product_ac
