import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Sell_washing_machine(props) {

    const [productName, setProductName] = useState("")
    const [componyName, setComponyName] = useState("")
    const [modelName, setModelName] = useState("")
    const [color, setColor] = useState("")
    const [capacity, setCapacity] = useState("")
    const [type, setType] = useState("")
    const [hotwash, setHotwash] = useState("")
    const [digitalDisplay, setDigitalDisplay] = useState("")
    const [childLock, setChildLock] = useState("")
    const [autoPowerOff, setAutoPowerOff] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const [price, setPrice] = useState("")
    const [pr_image, setPr_image] = useState("")
    const [uploadPercentage, setuploadPercentage] = useState("")


    function setValue(e) {
        e.target.name == "Product" && setProductName(e.target.value)
        e.target.name == "ComponyName" && setComponyName(e.target.value)
        e.target.name == "ModelName" && setModelName(e.target.value)
        e.target.name == "Color" && setColor(e.target.value)
        e.target.name == "Capacity" && setCapacity(e.target.value)
        e.target.name == "Type" && setType(e.target.value)
        e.target.name == "HotWash" && setHotwash(e.target.value)
        e.target.name == "DigitalDisplay" && setDigitalDisplay(e.target.value)
        e.target.name == "ChildLock" && setChildLock(e.target.value)
        e.target.name == "AutoPowerOff" && setAutoPowerOff(e.target.value)
        e.target.name == "Width" && setWidth(e.target.value)
        e.target.name == "Height" && setHeight(e.target.value)
        e.target.name == "Price" && setPrice(e.target.value)
        e.target.name == "Image" && setPr_image(e.target.files[0]);
    }

    const user = useSelector(state => state.user)
    const b_name = user.b_name
    const b_email = user.email

    function sendData() {
        var formData = new FormData();
        formData.append("washing_machine_details", JSON.stringify(
            {
                b_name, b_email, productName, componyName, modelName, color, capacity, type, hotwash, digitalDisplay, childLock, autoPowerOff, width, height, price
            }
        ))
        formData.append("image", pr_image);
        console.warn("formData-----", formData);

        axios.post("http://localhost:7000/create_product/washing_machine", formData, {
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


    var wmId = props.match.params.id;

    useEffect(() => {
        if (wmId) {
            axios.get("http://localhost:7000/wm_byid?wmid=" + wmId)
                .then((res) => {
                    console.log("res.data", res.data);
                    setComponyName(res.data[0].componyName);
                    setModelName(res.data[0].modelName);
                    setColor(res.data[0].color);
                    setCapacity(res.data[0].capacity);
                    setType(res.data[0].type);
                    setHotwash(res.data[0].hotwash);
                    setDigitalDisplay(res.data[0].digitalDisplay);
                    setChildLock(res.data[0].childLock);
                    setAutoPowerOff(res.data[0].autoPowerOff);
                    setWidth(res.data[0].width);
                    setHeight(res.data[0].height);
                    setPrice(res.data[0].price);
                });
        }
    }, []);

    function update() {
        var ssss = {
            productName, componyName, modelName, color, capacity, type, hotwash, digitalDisplay, childLock, autoPowerOff, width, height, price
        };
        ssss._id = wmId
        axios.post("http://localhost:7000/update_product/washing_machine", ssss).then((res) => {
            alert(res.data);

        });
    }

    return (
        <div className="sell">
            <h3>Sell A Washing Machine</h3>

            <div className="sell_info">
                Choose Image : <br />  <input type="file" name="Image" onChange={function (e) { setValue(e) }} /> <br /><br />

                <select name="Product" value={productName} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }} disabled>Select a Product</option>
                    <option value="Washing-Machine" onChange={function (e) { setValue(e) }}>Washing Machine</option>
                </select><br /><br />

                <select name="ComponyName" value={componyName} onChange={function (e) { setValue(e) }} >
                    <option value="" disabled>Select a Compony</option>
                    <option value="LG" >LG</option>
                    <option value="Whirlpool">WHIRLPOOL</option>
                    <option value="Panasoinc">PANASONIC</option>
                    <option value="Onida">ONIDA</option>
                    <option value="Voltas">VOLTAS</option>
                    <option value="Godrej">GODREJ</option>
                    <option value="Thomson">THOMSON</option>
                </select><br /><br />

                <label htmlFor="modelname">Model Name</label>
                <input type="text" id="modelname" name="ModelName" value={modelName} onChange={function (e) { setValue(e) }} /><br />

                <label htmlFor="color">Color</label>
                <input type="text" id="color" name="Color" value={color} onChange={function (e) { setValue(e) }} /><br /><br />

                <select name="Capacity" value={capacity} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }} disabled>CAPACITY</option>
                    <option value="6-kg" onChange={function (e) { setValue(e) }}>6 KG</option>
                    <option value="7-kg" onChange={function (e) { setValue(e) }}>7 KG</option>
                    <option value="8-kg" onChange={function (e) { setValue(e) }}>8 KG</option>
                    <option value="9-kg" onChange={function (e) { setValue(e) }}>9 KG</option>
                    <option value="10-kg" onChange={function (e) { setValue(e) }}>10 KG</option>
                </select><br /><br />

                <select name="Type" value={type} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }} disabled>Function Type</option>
                    <option value="Fully_automatic_front_load" onChange={function (e) { setValue(e) }}>Fully Automatic Front Load</option>
                    <option value="Fully_automatic_top_load" onChange={function (e) { setValue(e) }}>Fully Automatic Top Load</option>
                    <option value="semi_automatic_top_load" onChange={function (e) { setValue(e) }}>Semi Automatic  Top Load</option>
                    <option value="washer_with_dryer" onChange={function (e) { setValue(e) }}>Washer With Dryer</option>
                    <option value="washer_only" onChange={function (e) { setValue(e) }}>Washer Only</option>
                </select><br /><br />

                <select name="HotWash" value={hotwash} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }} disabled>Hot Wash</option>
                    <option value="YES" onChange={function (e) { setValue(e) }}>YES</option>
                    <option value="NO" onChange={function (e) { setValue(e) }}>NO</option>
                </select><br /><br />

                <select name="DigitalDisplay" value={digitalDisplay} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }} disabled>Digital Display</option>
                    <option value="YES" onChange={function (e) { setValue(e) }}>YES</option>
                    <option value="NO" onChange={function (e) { setValue(e) }}>NO</option>
                </select><br /><br />

                <select name="ChildLock" value={childLock} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }} disabled>Child Lock</option>
                    <option value="YES" onChange={function (e) { setValue(e) }}>YES</option>
                    <option value="NO" onChange={function (e) { setValue(e) }}>NO</option>
                </select><br /><br />

                <select name="AutoPowerOff" value={autoPowerOff} onChange={function (e) { setValue(e) }} >
                    <option value="" onChange={function (e) { setValue(e) }} disabled>Auto Power Off</option>
                    <option value="YES" onChange={function (e) { setValue(e) }}>YES</option>
                    <option value="NO" onChange={function (e) { setValue(e) }}>NO</option>
                </select><br /><br />


                <label htmlFor="width">Width</label>
                <input type="text" id="width" name="Width" value={width} onChange={function (e) { setValue(e) }} /><br /><br />

                <label htmlFor="height">Height</label>
                <input type="text" id="height" name="Height" value={height} onChange={function (e) { setValue(e) }} /><br /><br />

                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="Price" value={price} onChange={function (e) { setValue(e) }} /><br /><br />

                {wmId ? <button type="button" className="btn btn-success" onClick={update}>Update</button>
                    : <button type="submit" className="btn btn-success" onClick={sendData}>Add Item{uploadPercentage}</button>}


            </div>
        </div>
    )
}

export default Sell_washing_machine
