import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Mobile(props) {

    const [productsMobiles, setProductsMobiles] = useState([])
    const [Xiaomi, setXiaomi] = useState([])


    var abcd = props.match.params.ac;
    console.warn("abcd=", abcd)
    console.warn("Xiaomi=", Xiaomi)
    // console.warn("mi=", Xiaomi)

    useEffect(() => {
        axios.get('http://localhost:7000/list_products/mobiles').then((res) => {

            if (res) {
                var rs = res.data.data
                console.log("rs", rs);
                var result = rs.filter(elitem => elitem.componyName == abcd);
                console.warn("result=", result);
                setProductsMobiles(result)

            } else {
                alert("err")
            }

        })
    }, []);

    if (abcd) {
        console.log(abcd, "abcd")
    } else {
        console.log("sorry");
    }

    var productsList = productsMobiles.map(function (prmob) {
        return <div key={prmob._id}>
            <h4 className="hh44">{prmob.productName} </h4>
            <h3>{prmob.componyName} {prmob.modelName} ({prmob.color} ,{prmob.ram})</h3>
            <li>{prmob.ram} | {prmob.rom}</li>
            <li> {prmob.display} </li>
            <li> {prmob.rearCamara} | {prmob.frontCamara} </li>
            <li> {prmob.battery} </li>
            <li> {prmob.processor}</li>
            <li> {prmob.price}</li>
            <li> by- {prmob.b_name}</li>
        </div>
    })

    return (
        <div>
            {productsList}
        </div>
    )
}

export default Mobile
