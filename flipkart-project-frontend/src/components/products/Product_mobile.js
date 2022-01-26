import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../actions/FlipCartActions';
// import { addProductToCart } from '../../actions/FlipCartActions';
import Navbar2 from '../Navbar2';
import './Realme.css'

function Product_mobile(props) {
    const user = useSelector(state => state.user)
    const [productsMobiles, setProductsMobiles] = useState([])
    const dispatch = useDispatch()
    console.log(productsMobiles);

    useEffect(() => {
        axios.get('http://localhost:7000/list_products/mobiles').then((res) => {

            if (res) {
                var rs = res.data.data
                var result = rs.filter(elitem => elitem.productName == "Mobile");
                setProductsMobiles(result);
            } else {
                alert("err")
            }

        })
    }, []);


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

    var productsList = productsMobiles.map(function (prmob) {

        return <div key={prmob._id} >
            {/* <Link onClick={function () { sp(prmob._id) }}> */}
            <div className="row">

                <div className="col-md-4">
                    <Link onClick={function () { sp(prmob._id) }}>
                        <li className="mli" >
                            <img src={"http://localhost:7000/" + prmob.product_image} />
                        </li>
                    </Link>
                </div>

                <div className="col-md-8">
                    <Link onClick={function () { sp(prmob._id) }}>
                        <h3>{prmob.componyName} {prmob.modelName} ({prmob.color},{prmob.ram})</h3>
                        <li>{prmob.ram} | {prmob.rom}</li>
                        <li> {prmob.display} </li>
                        <li> {prmob.rearCamara} | {prmob.frontCamara} </li>
                        <li> {prmob.battery} </li>
                        <li> {prmob.processor}</li>
                        <li> by- {prmob.b_name}</li>
                        <h4 className="mob_price"> ₹ {prmob.price}</h4><br />
                    </Link>
                    <div >
                        {user && <button className="sptvbtn" onClick={function () { cart(prmob) }}>CART</button>}
                        {user && <button className="sptvbtn2" onClick={function () { buy(prmob._id) }}>BUY</button>}
                    </div>
                </div>
            </div>


            {/* </Link> */}

        </div >
    });


    function funnn(mobcn) {

        if (mobcn) {

            props.history.push("/P/" + mobcn)

        }
    }


    return (
        <div className="realme container-fluid">
            <Navbar2 />
            <div className="row tv_first_row">
                <div className="col-md-2 mobi" onClick={function () { funnn("Redmi") }}>
                    <Link>
                        <img src="xiaomi.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("Oppo") }}>
                    <Link>
                        <img src="oppo.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi mobi1" onClick={function () { funnn("Vivo") }}>
                    <Link>
                        <img src="vivo.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi " onClick={function () { funnn("Realme") }}>
                    <Link>
                        <img src="realme.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("Samsung") }}>
                    <Link>
                        <img src="samsung.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi" onClick={function () { funnn("Iphone") }}>
                    <Link>
                        <img src="iphone.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>
            </div>
            <div>
                <h3 className="mob_h3">Mobile</h3>
                <div className="realme_first">

                    <div className="realme_info">

                        {productsList}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product_mobile


