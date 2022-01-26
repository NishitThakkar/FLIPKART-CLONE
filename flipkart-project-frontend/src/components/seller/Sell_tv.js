import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar2 from '../Navbar2'
import Product_tv from '../products/Product_tv'
import My_products from './My_products'
import './sell.css'

function Sell_tv(props) {

    const [productName, setProductName] = useState("")
    const [componyName, setComponyName] = useState("")
    const [modelName, setModelName] = useState("")
    const [color, setColor] = useState("")
    const [displaySize, setDisplaySize] = useState("")
    const [screenType, setScreenType] = useState("")
    const [resolution, setResolution] = useState("")
    const [price, setPrice] = useState("")
    const [pr_image, setPr_image] = useState("")

    const [uploadPercentage, setuploadPercentage] = useState("")
    console.log(pr_image, "======pr_image");

    function setValue(e) {
        e.target.name == "Product" && setProductName(e.target.value);
        e.target.name == "ComponyName" && setComponyName(e.target.value);
        e.target.name == "ModelName" && setModelName(e.target.value);
        e.target.name == "DisplaySize" && setDisplaySize(e.target.value);
        e.target.name == "ScreenType" && setScreenType(e.target.value);
        e.target.name == "Resolution" && setResolution(e.target.value);
        e.target.name == "Color" && setColor(e.target.value);
        e.target.name == "Price" && setPrice(e.target.value);
        e.target.name == "Image" && setPr_image(e.target.files[0]);
    }
    const user = useSelector(state => state.user)
    const b_name = user.b_name
    const b_email = user.email

    function sendData() {
        var formData = new FormData();
        formData.append("tv_details", JSON.stringify({
            b_name, b_email, productName, componyName, modelName, color, displaySize, screenType, price
        }));
        formData.append("image", pr_image);
        console.log(formData, "---formData");

        axios.post("http://localhost:7000/create_product/tv", formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
                console.log("file upload progress: " + progressEvent);
                setuploadPercentage(parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100)));
            }
        }).then((res) => {
            alert("Upload formData success");
        }).catch((err) => {
            alert("Upload formData error");
        })
    }
    var tvid = props.match.params.id;
    // alert(tvid)
    // =======================================================================================================

    // useEffect(() => {
    //     axios.get("http://localhost:7000/update_tv_byid?id=" + tvid)
    //         .then((res) => {
    //             console.log(res.data);
    //             setComponyName(res.data[0].componyName);
    //             setModelName(res.data[0].modelName);
    //             setColor(res.data[0].color);
    //             setDisplaySize(res.data[0].displaySize);
    //             setScreenType(res.data[0].screenType);
    //             setResolution(res.data[0].resolution);
    //             setPrice(res.data[0].price);
    //         });
    // }, []);
    function updateData() {
        var tvtv = {
            componyName, modelName, color, displaySize, screenType, resolution, price
        }
        tvtv._id = tvid

        axios.post("http://localhost:7000/update_product/tv", tvtv).then((res) => {
        });
    }
    return (


        <div className="sell">
            <Navbar2 />

            <h3>Sell A Tv </h3>

            <div className="sell_info">

                enter Image : <input type="file" name="Image" onChange={function (e) { setValue(e) }} /> <br /><br />

                <select name="Product" value={productName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>select product</option>
                    <option value="Tv" onChange={function (e) { setValue(e) }}>Tv</option>
                </select><br /><br />


                <select name="ComponyName" value={componyName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Select a Compony</option>
                    <option value="MI" onChange={function (e) { setValue(e) }}>MI</option>
                    <option value="samsung" onChange={function (e) { setValue(e) }}>SAMSUNG</option>
                    <option value="realme" onChange={function (e) { setValue(e) }}>REALME</option>
                    <option value="vu" onChange={function (e) { setValue(e) }}>VU</option>
                    <option value="sony" onChange={function (e) { setValue(e) }}>SONY</option>
                    <option value="oneplus" onChange={function (e) { setValue(e) }}>ONE PLUS</option>
                </select><br /><br />

                <label htmlFor="modelName">Model Name </label><br />
                <input type="text" id="modelName" name="ModelName" value={modelName} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Color">Color </label><br />
                <input type="text" id="Color" name="Color" value={color} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="DisplaySize">Display Size </label><br />
                <input type="text" id="DisplaySize" name="DisplaySize" value={displaySize} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="ScreenType">Screen Type </label><br />
                <input type="text" id="ScreenType" name="ScreenType" value={screenType} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Resolution">Resolution</label><br />
                <input type="text" id="Resolution" name="Resolution" value={resolution} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Price">Price </label><br />
                <input type="text" id="Price" name="Price" value={price} onChange={function (e) { setValue(e) }} /><br /><br />


                {tvid ? <button type="submit" className="btn btn-success" onClick={updateData}>Update</button>
                    : <button type="submit" className="btn btn-success" onClick={sendData}>Add Item</button>}
                {/* {uploadPercentage}% */}
            </div>

            <My_products />
            <Product_tv />
        </div>
    )
}

export default Sell_tv
