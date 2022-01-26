import axios from 'axios'
import React, { useState } from 'react'
import './sell.css'
import Product_laptop from '../products/Product_laptop'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Sell_laptop(props) {

    const [productName, setProductName] = useState("")
    const [componyName, setComponyName] = useState("")
    const [modelName, setModelName] = useState("")
    const [color, setColor] = useState("")
    const [battery, setBattery] = useState("")
    const [ram, setRam] = useState("")
    const [processor, setProcessor] = useState("")
    const [screenSize, setscreenSize] = useState("")
    const [graphicProcessor, setgraphicProcessor] = useState("")
    const [price, setPrice] = useState("")
    const [pr_image, setPr_image] = useState("")
    const [uploadPercentage, setuploadPercentage] = useState("")

    function setValue(e) {

        e.target.name == "Product" && setProductName(e.target.value);
        e.target.name == "ComponyName" && setComponyName(e.target.value);
        e.target.name == "ModelName" && setModelName(e.target.value);
        e.target.name == "Color" && setColor(e.target.value);
        e.target.name == "Battery" && setBattery(e.target.value);
        e.target.name == "Ram" && setRam(e.target.value);
        e.target.name == "Processor" && setProcessor(e.target.value);
        e.target.name == "ScreenSize" && setscreenSize(e.target.value);
        e.target.name == "GraphicProcessor" && setgraphicProcessor(e.target.value);
        e.target.name == "Price" && setPrice(e.target.value);
        e.target.name == "Image" && setPr_image(e.target.files[0]);

    }
    const user = useSelector(state => state.user)
    const b_name = user.b_name
    const b_email = user.email


    function sendData() {
        var formData = new FormData();
        formData.append("laptop_details", JSON.stringify({
            b_name, b_email, productName, componyName, modelName, color, ram, screenSize, battery, graphicProcessor, processor, price
        }));
        formData.append("image", pr_image);
        console.log(formData, "----------------formData");
        axios.post("http://localhost:7000/create_product/laptop", formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
                console.log("file upload progress: " + progressEvent);
                setuploadPercentage(parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100)));
            }
        }).then(() => {
            alert("Upload formData success");
        }).catch(() => {
            alert("Upload formData error");
        })
    }
    var ltId = props.match.params.id;

    useEffect(() => {
        axios.get("http://localhost:7000/update_laptop_byid?iid=" + ltId).then(function (res) {
            setComponyName(res.data[0].componyName);
            setModelName(res.data[0].modelName);
            setColor(res.data[0].color);
            setBattery(res.data[0].battery);
            setProcessor(res.data[0].processor);
            setRam(res.data[0].ram);
            setscreenSize(res.data[0].screenSize);
            setgraphicProcessor(res.data[0].graphicProcessor);
            setPrice(res.data[0].price);
        })
    }, [])

    function sendData22() {

        var laptopData = {
            componyName, modelName, color, battery, processor, screenSize, graphicProcessor, price
        }
        laptopData._id = ltId

        axios.post("http://localhost:7000/update_product/laptop", laptopData).then(function (res) {
            alert(res.data)
        })
    }

    return (
        <div className="sell">
            <h3>Sell A Laptop </h3>

            <div className="sell_info">
                <h5>{b_name}</h5>
                enter Image : <input type="file" name="Image" onChange={function (e) { setValue(e) }} /> <br /><br />

                <select name="Product" value={productName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Select Product</option>
                    <option value="Laptop" onChange={function (e) { setValue(e) }}>Laptop</option>
                </select><br /><br />

                <select name="ComponyName" value={componyName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Select a Compony</option>
                    <option value="hp" onChange={function (e) { setValue(e) }}>HP</option>
                    <option value="dell" onChange={function (e) { setValue(e) }}>DELL</option>
                    <option value="asus" onChange={function (e) { setValue(e) }}>ASUS</option>
                    <option value="lenovo" onChange={function (e) { setValue(e) }}>LENOVO</option>
                    <option value="acer" onChange={function (e) { setValue(e) }}>ACER</option>
                    <option value="mi" onChange={function (e) { setValue(e) }}>MI</option>
                    <option value="apple" onChange={function (e) { setValue(e) }}>APPLE</option>
                </select><br /><br />

                <label htmlFor="ModelName">Model Name</label><br />
                <input type="text" id="ModelName" name="ModelName" value={modelName} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="ScreenSize">Screen Size</label><br />
                <input type="text" id="ScreenSize" name="ScreenSize" value={screenSize} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Color">Color</label><br />
                <input type="text" id="Color" name="Color" value={color} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Battery">Battery</label><br />
                <input type="text" id="Battery" name="Battery" value={battery} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Ram">Ram</label><br />
                <input type="text" id="Ram" name="Ram" value={ram} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Processor">Processor</label><br />
                <input type="text" id="Processor" name="Processor" value={processor} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="GraphicProcessor">Graphic Processor</label><br />
                <input type="text" id="GraphicProcessor" name="GraphicProcessor" value={graphicProcessor} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Price">Price</label><br />
                <input type="text" id="Price" name="Price" value={price} onChange={function (e) { setPrice(e.target.value) }} /><br /><br />

                {/* onChange={function (e) { setValue(e) }} */}
                {ltId ? <button type="submit" className="btn btn-success" onClick={sendData22}>UPDATE Item</button>

                    : <button type="submit" className="btn btn-success" onClick={sendData}>Add Item</button>
                }{uploadPercentage}

            </div>
            <Product_laptop />
        </div >
    )
}

export default Sell_laptop
