import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Product_mobile from '../products/Product_mobile';
import './sell.css'

function Sell_mobile(props) {

    const [productName, setProductName] = useState("")
    const [componyName, setComponyName] = useState("");
    const [modelName, setModelName] = useState("");
    const [color, setColor] = useState("");
    const [ram, setRam] = useState("");
    const [rom, setRom] = useState("");
    const [display, setDisplay] = useState("");
    const [battery, setBattery] = useState("");
    const [rearCamara, setRearCamara] = useState("");
    const [frontCamara, setFrontCamara] = useState("");
    const [processor, setProcessor] = useState("");
    const [price, setPrice] = useState("");
    const [uploadPercentage, setuploadPercentage] = useState("")
    const [pr_image, setPr_image] = useState("")


    function setValue(e) {
        e.target.name == "Product" && setProductName(e.target.value);
        e.target.name == "ComponyName" && setComponyName(e.target.value);
        e.target.name == "ModelName" && setModelName(e.target.value);
        e.target.name == "Color" && setColor(e.target.value);
        e.target.name == "Ram" && setRam(e.target.value);
        e.target.name == "Rom" && setRom(e.target.value);
        e.target.name == "Display" && setDisplay(e.target.value);
        e.target.name == "Battery" && setBattery(e.target.value);
        e.target.name == "RearCamara" && setRearCamara(e.target.value);
        e.target.name == "FrontCamara" && setFrontCamara(e.target.value);
        e.target.name == "Processor" && setProcessor(e.target.value);
        e.target.name == "Price" && setPrice(e.target.value);
        e.target.name == "Image" && setPr_image(e.target.files[0]);

    }
    const user = useSelector(state => state.user)
    const b_name = user.b_name
    const b_email = user.email

    // function sendData() {
    //     var ss = {
    //         b_name, b_email, productName, componyName, modelName, color, ram, rom, display, battery, rearCamara, frontCamara, processor, price
    //     };
    //     axios.post("http://localhost:7000/create_product/mobiles", ss).then(function (res) {
    //         console.log(res.data);
    //         alert(res.data);
    //     });
    // }

    function sendData() {
        var formData = new FormData();
        formData.append("mob_details", JSON.stringify(
            {
                b_name, b_email, productName, componyName, modelName, color, ram, rom, display, battery, rearCamara, frontCamara, processor, price
            }
        ));
        formData.append("image", pr_image);
        console.log(formData, "----------------formData");

        axios.post("http://localhost:7000/create_product/mobiles", formData, {
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

    var mbId = props.match.params.id;
    console.log("mbid is", mbId);

    useEffect(() => {
        if (mbId) {
            axios.get("http://localhost:7000/mob_byid?mid=" + mbId)
                .then((res) => {
                    console.log("res.data", res.data);
                    setComponyName(res.data[0].componyName);
                    setModelName(res.data[0].modelName);
                    setColor(res.data[0].color);
                    setBattery(res.data[0].battery);
                    setRearCamara(res.data[0].rearCamara);
                    setFrontCamara(res.data[0].frontCamara);
                    setProcessor(res.data[0].processor);
                    setPrice(res.data[0].price);
                    setRam(res.data[0].ram);
                    setRom(res.data[0].rom);
                    setDisplay(res.data[0].display);
                });
        }
    }, []);

    function update() {
        var ssss = {
            componyName, modelName, color, ram, rom, display, battery, rearCamara, frontCamara, processor, price
        };
        ssss._id = mbId

        axios.post("http://localhost:7000/update_product/mobile", ssss).then((res) => {
            alert(res.data);

        });
    }

    return (
        <div className="sell">
            <h3 >Sell A Mobile </h3>

            <div className="sell_info">
                <h5>{b_name}</h5>
                enter Image : <input type="file" name="Image" onChange={function (e) { setValue(e) }} /> <br /><br />

                <select name="Product" value={productName} onChange={function (e) { setValue(e) }} >
                    <option value="Mobile" onChange={function (e) { setValue(e) }}>Mobile</option>
                    <option value="" onChange={function (e) { setValue(e) }}>Select Product</option>
                </select><br /><br />

                <select name="ComponyName" value={componyName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Select a Compony</option>
                    <option value="Redmi" onChange={function (e) { setValue(e) }}>Redmi</option>
                    <option value="Realme" onChange={function (e) { setValue(e) }}>Realme</option>
                    <option value="Vivo" onChange={function (e) { setValue(e) }}>Vivo</option>
                    <option value="Oppo" onChange={function (e) { setValue(e) }}>Oppo</option>
                    <option value="Samsung" onChange={function (e) { setValue(e) }}>Samsung</option>
                    <option value="Iphone" onChange={function (e) { setValue(e) }}>Iphone</option>
                </select><br /><br />

                <label htmlFor="modelName">Model Name </label><br />
                <input type="text" id="modelName" name="ModelName" value={modelName} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Color">Color </label><br />
                <input type="text" id="Color" name="Color" value={color} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Ram">Ram </label><br />
                <input type="text" id="Ram" name="Ram" value={ram} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Rom">Rom </label><br />
                <input type="text" id="Rom" name="Rom" value={rom} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Display"> Display</label><br />
                <input type="text" id="Display" name="Display" value={display} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Battery">Battery </label><br />
                <input type="text" id="Battery" name="Battery" value={battery} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="RearCamara"> Rear Camara </label><br />
                <input type="text" id="RearCamara" name="RearCamara" value={rearCamara} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="FrontCamara">Front Camara </label><br />
                <input type="text" id="FrontCamara" name="FrontCamara" value={frontCamara} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Processor">Processor </label><br />
                <input type="text" id="Processor" name="Processor" value={processor} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="Price">Price </label><br />
                <input type="text" id="Price" name="Price" value={price} onChange={function (e) { setValue(e) }} /><br /><br />

                {mbId ? <button type="button" className="btn btn-success" onClick={update}>Update</button>
                    : <button type="submit" className="btn btn-success" onClick={sendData}>Add Item{uploadPercentage}</button>}

            </div>
            <div>
                <Product_mobile />

            </div>
        </div>
    )
}

export default Sell_mobile
