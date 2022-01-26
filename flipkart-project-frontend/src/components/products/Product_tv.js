import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../actions/FlipCartActions';
import Navbar2 from '../Navbar2';
import './Product_tv.css'

function Product_tv(props) {

    const user = useSelector(state => state.user)

    const [productsTv, setProductsTv] = useState([])


    useEffect(() => {
        axios.get('http://localhost:7000/list_products/tv').then((res) => {
            console.log(res.data);
            setProductsTv(res.data);
        })
    }, []);


    // function doAction(id, action) {
    //     if (action === "delete") {
    //         axios.get('http://localhost:7000/delete_product/tv?did=' + id).then((res) => {

    //             axios.get('http://localhost:7000/list_products/tv').then((res) => {

    //                 setProductsTv(res.data);
    //             })
    //         })
    //     } else {
    //         console.log("err");
    //     }
    // }
    // function doUpdate(id) {
    //     props.history.push("/Sell_tv/" + id)
    // }

    //////////////////////////////////////////////////////////////////////

    const dispatch = useDispatch();

    function buy(id) {
        props.history.push("/Buy/" + id)
        console.warn(id, "idd");
    }

    function cart(prtv) {
        // dispatch(addProductToCart(prtv));
        dispatch(addProductToCart({ ...prtv, qty: 1 }));

    }

    function sp(id) {
        props.history.push("/Single_product/" + id)
    }


    var productsTvList = productsTv.map((prtv) => {
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
            <div className="a7">

                {user && <button className="sptvbtn" onClick={function () { cart(prtv) }}>Cart</button>}
                {user && <button className="sptvbtn2" onClick={function () { buy(prtv._id) }}>Buy</button>}
            </div>

        </div>

    });

    function funnn(tvcn) {

        if (tvcn) {

            props.history.push("/P/" + tvcn)
            alert(tvcn)

        }
    }

    return (


        <div className="tv_first container-fluid">
            <Navbar2 />
            <div className="row tv_first_row">
                <div className="col-md-2 mobi" onClick={function () { funnn("MI") }}>
                    <Link>
                        <img src="../tv/mitv.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("samsung") }}>
                    <Link>
                        <img src="../tv/download.jpeg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("realme") }}>
                    <Link>
                        <img src="../tv/download (1).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi " onClick={function () { funnn("vu") }}>
                    <Link>
                        <img src="../tv/download (2).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi" onClick={function () { funnn("oneplus") }}>
                    <Link>
                        <img src="../tv/download (3).jpeg"></img>

                        <p>Shop Now!</p>    R
                    </Link>
                </div>
                <div className="col-md-2 mobi" onClick={function () { funnn("sony") }}>
                    <Link>
                        <img src="../tv/download (4).jpeg"></img>

                        <p>Shop Now!</p>
                    </Link>
                </div>
            </div>


            <h3 className=" mob_h3">Tv</h3>

            <div className="tv_info">
                {productsTvList}
            </div>

        </div>



    )
}

export default Product_tv

