import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../actions/FlipCartActions';
import Navbar2 from '../Navbar2';

function Product_Washing_machine(props) {
    const user = useSelector(state => state.user)
    const [productsWashingMachine, setProductsWashingMachine] = useState([])
    const dispatch = useDispatch()
    console.log(productsWashingMachine);

    useEffect(() => {
        axios.get('http://localhost:7000/list_products/washing_machine').then((res) => {

            if (res) {
                var rs = res.data.data
                var result = rs.filter(elitem => elitem.productName == "Washing-Machine");
                setProductsWashingMachine(result);
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

    var productsList = productsWashingMachine.map(function (prmob) {

        return <div key={prmob._id} >
            <div className="row">

                <div className="col-md-3">
                    <Link onClick={function () { sp(prmob._id) }}>
                        <div className="tvli" >
                            <img src={"http://localhost:7000/" + prmob.product_image} />
                        </div>
                    </Link>
                </div>

                <div className="col-md-8">
                    <Link onClick={function () { sp(prmob._id) }}>
                        <h3>{prmob.componyName}  {prmob.type}</h3>
                        {/* <li> {prmob.hotwash} </li>
                        <li> {prmob.digitalDisplay} | {prmob.childLock} </li>
                        <li> {prmob.autoPowerOff} </li> */}
                        <li> Capacity : {prmob.capacity}</li>
                        <li> Height : {prmob.height}</li>
                        <li> Width : {prmob.width}</li>
                        <li> by- {prmob.b_name}</li>
                        <h4 className="mob_price"> ₹ {prmob.price}</h4><br />
                    </Link>
                    {/* productName, componyName, modelName, color, capacity, type, hotwash,
                    digitalDisplay, childLock, autoPowerOff, width, height, price */}

                    <div >
                        {user && <button className="sptvbtn" onClick={function () { cart(prmob) }}>CART</button>}
                        {user && <button className="sptvbtn2" onClick={function () { buy(prmob._id) }}>BUY</button>}
                    </div>
                </div>
            </div>


            {/* </Link> */}

        </div >
    });


    function funnn(wmcn) {

        if (wmcn) {

            props.history.push("/P/" + wmcn)

        }
    }


    return (
        <div className="realme container-fluid">
            <Navbar2 />
            <div className="row tv_first_row">
                <div className="col-md-2 mobi mobi1" onClick={function () { funnn("Whirlpool") }}>
                    <Link>
                        <img src="washing machine/39f323.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi mobi1" onClick={function () { funnn("LG") }}>
                    <Link>
                        <img src="washing machine/fa0b26853c2846f6.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi mobi1" onClick={function () { funnn("Godrej") }}>
                    <Link>
                        <img src="washing machine/1469789277596.jpg"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi mobi1" onClick={function () { funnn("Voltas") }}>
                    <Link>
                        <img src="washing machine/download (3).png"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

                <div className="col-md-2 mobi mobi1" onClick={function () { funnn("Thomson") }}>
                    <Link>
                        <img src="washing machine/download (1).png"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>
                <div className="col-md-2 mobi mobi1" onClick={function () { funnn("Onida") }}>
                    <Link>
                        <img src="washing machine/download.png"></img>
                        <p>Shop Now!</p>
                    </Link>
                </div>

            </div>
            <div>
                <h3 className="mob_h3">WASHING MACHINE</h3>
                <div className="realme_first">

                    <div className="realme_info" style={{marginLeft:290}}>

                        {productsList}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product_Washing_machine



