import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Sell_ac.css'

function Sell_ac(props) {

    const [productName, setproductName] = useState("")
    const [componyName, setcomponyName] = useState("")
    const [modelName, setmodelName] = useState("")
    const [acColor, setacColor] = useState("")
    const [coolingCapacity, setcoolingCapacity] = useState("")
    const [powerConsumption, setpowerConsumption] = useState("")
    const [type, settype] = useState("")
    const [capacity, setcapacity] = useState("")
    const [energyRating, setenergyRating] = useState("")
    const [technology, settechnology] = useState("")
    const [turboMode, setturboMode] = useState("")
    const [dustFilter, setdustFilter] = useState("")
    const [price, setprice] = useState("")
    const [pr_image, setPr_image] = useState("")
    const [uploadPercentage, setuploadPercentage] = useState("")
    function setValue(e) {
        e.target.name == "Product" && setproductName(e.target.value);
        e.target.name == "ComponyName" && setcomponyName(e.target.value);
        e.target.name == "ModelName" && setmodelName(e.target.value);
        e.target.name == "AcColor" && setacColor(e.target.value);
        e.target.name == "CoolingCapacity" && setcoolingCapacity(e.target.value);
        e.target.name == "PowerConsumption" && setpowerConsumption(e.target.value);
        e.target.name == "Type" && settype(e.target.value);
        e.target.name == "Capacity" && setcapacity(e.target.value);
        e.target.name == "EnergyRating" && setenergyRating(e.target.value);
        e.target.name == "Technology" && settechnology(e.target.value);
        e.target.name == "TurboMode" && setturboMode(e.target.value);
        e.target.name == "DustFilter" && setdustFilter(e.target.value);
        e.target.name == "Price" && setprice(e.target.value);
        e.target.name == "Image" && setPr_image(e.target.files[0]);
    }
    const user = useSelector(state => state.user)
    var b_email = user.email
    var b_name = user.b_name
    function sendData() {

        var formData = new FormData();
        formData.append("ac_details", JSON.stringify({
            b_email, b_name, productName, componyName, modelName, acColor, coolingCapacity, turboMode, powerConsumption, type, capacity, technology, energyRating, turboMode, dustFilter, price
        }));
        formData.append("image", pr_image);
        console.log(formData, "----------------formData");
        axios.post("http://localhost:7000/create_product/ac", formData, {
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
    var acId = props.match.params.id

    useEffect(() => {
        if (acId) {
            axios.get("http://localhost:7000/ac_by_id?aid=" + acId).then(function (res) {
                console.log(res.data, "ac res");

                setproductName(res.data[0].productName)
                setcomponyName(res.data[0].componyName)
                setmodelName(res.data[0].modelName);
                setacColor(res.data[0].acColor);
                setcoolingCapacity(res.data[0].coolingCapacity);
                setpowerConsumption(res.data[0].powerConsumption);
                settype(res.data[0].type);
                setcapacity(res.data[0].capacity);
                setenergyRating(res.data[0].energyRating);
                settechnology(res.data[0].technology);
                setturboMode(res.data[0].turboMode);
                setdustFilter(res.data[0].dustFilter);
                setprice(res.data[0].price)

            })
        }
    }, [])

    function updateData() {
        var uac = {
            productName, componyName, modelName, acColor, coolingCapacity, turboMode, powerConsumption, type, capacity, technology, energyRating, turboMode, dustFilter, price
        };
        uac._id = acId
        axios.post("http://localhost:7000/update_product/ac", uac).then((res) => {
            alert(res.data);

        });
    }

    return (
        <div>
            <h3 >Sell AC </h3>

            <div className="sell_info">
                enter Image : <input type="file" name="Image" onChange={function (e) { setValue(e) }} /> <br /><br />

                <select name="Product" value={productName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Select a Product</option>
                    <option value="AC" onChange={function (e) { setValue(e) }}>AC</option>
                </select><br /><br />

                <select name="ComponyName" value={componyName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Compony Name</option>
                    <option value="HITACHI" onChange={function (e) { setValue(e) }}>HITACHI</option>
                    <option value="BLUE STAR" onChange={function (e) { setValue(e) }}>BLUE STAR</option>
                    <option value="VOLTAS" onChange={function (e) { setValue(e) }}>VOLTAS</option>
                    <option value="LG" onChange={function (e) { setValue(e) }}>LG</option>
                    <option value="TCL" onChange={function (e) { setValue(e) }}>TCL</option>
                    <option value="TOSHIBA" onChange={function (e) { setValue(e) }}>TOSHIBA</option>
                    <option value="SAMSUNG" onChange={function (e) { setValue(e) }}>SAMSUNG</option>
                    <option value="PANASONIC" onChange={function (e) { setValue(e) }}>PANASONIC</option>
                </select><br /><br />

                <label htmlFor="modelName">Model Name</label>
                <input type="text" id="modelName" name="ModelName" value={modelName} onChange={function (e) { setValue(e) }} />

                <label htmlFor="acColor">AC Color</label>
                <input type="text" id="acColor" name="AcColor" value={acColor} onChange={function (e) { setValue(e) }} />


                <label htmlFor="cc">Cooling Capacity</label>
                <input type="text" id="cc" name="CoolingCapacity" value={coolingCapacity} onChange={function (e) { setValue(e) }} />

                <label htmlFor="pc">Power Consumption</label>
                <input type="text" id="pc" name="PowerConsumption" value={powerConsumption} onChange={function (e) { setValue(e) }} /> <br /><br />

                <select name="Type" value={type} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Type</option>
                    <option value="Cassette" onChange={function (e) { setValue(e) }}>Cassette</option>
                    <option value="Portable" onChange={function (e) { setValue(e) }}>Portable</option>
                    <option value="Split" onChange={function (e) { setValue(e) }}>Split</option>
                    <option value="Window" onChange={function (e) { setValue(e) }}>Window</option>
                </select><br /><br />

                <select name="Capacity" value={capacity} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>CAPACITY</option>
                    <option value="1 TON" onChange={function (e) { setValue(e) }}>1 TON</option>
                    <option value="1.5 TON" onChange={function (e) { setValue(e) }}>1.5 TON</option>
                    <option value="2 TON" onChange={function (e) { setValue(e) }}>2 TON</option>
                    <option value="2.5 TON" onChange={function (e) { setValue(e) }}>2.5 TON</option>
                    <option value="3 TON" onChange={function (e) { setValue(e) }}>3 TON</option>
                </select><br /><br />

                <select name="EnergyRating" value={energyRating} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>ENERGY RATING</option>
                    <option value="3 STAR" onChange={function (e) { setValue(e) }}>3 STAR</option>
                    <option value="4 STAR" onChange={function (e) { setValue(e) }}>4 STAR</option>
                    <option value="5 STAR" onChange={function (e) { setValue(e) }}>5 STAR</option>
                </select><br /><br />

                <select name="Technology" value={technology} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>TECHNOLOGY</option>
                    <option value="Dual Inverter" onChange={function (e) { setValue(e) }}>Dual Inverter</option>
                    <option value="Fixed Speed" onChange={function (e) { setValue(e) }}>Fixed Speed</option>
                    <option value="Inverter" onChange={function (e) { setValue(e) }}>Inverter</option>
                    <option value="Triple Inverter" onChange={function (e) { setValue(e) }}>Triple Inverter</option>
                </select><br /><br />

                <select name="TurboMode" value={turboMode} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Turbo Mode</option>
                    <option value="YES" onChange={function (e) { setValue(e) }}>YES</option>
                    <option value="NO" onChange={function (e) { setValue(e) }}>NO</option>
                </select><br /><br />

                <select name="DustFilter" value={dustFilter} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }}>Dust Filter</option>
                    <option value="YES" onChange={function (e) { setValue(e) }}>YES</option>
                    <option value="NO" onChange={function (e) { setValue(e) }}>NO</option>
                </select><br /><br />

                <label htmlFor="price">Item Price</label>
                <input type="text" id="price" name="Price" value={price} onChange={function (e) { setValue(e) }} />


                {
                    acId ? <button className="btn btn-info" onClick={updateData}>Update Item</button>

                        : <button className="btn btn-info" onClick={sendData}>Add Item </button>
                }{uploadPercentage}
            </div>


        </div>
    )
}


export default Sell_ac
