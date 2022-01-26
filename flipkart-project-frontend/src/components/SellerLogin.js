import { parse } from '@fortawesome/fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from '../actions/FlipCartActions'
import '../css/Login.css'

function SellerLogin(props) {

    const dispatch = useDispatch();
    const [b_name, setB_name] = useState("")
    const [b_type, setB_type] = useState("")
    const [b_desc, setB_desc] = useState("")
    const [uploadPercentage, setuploadPercentage] = useState("")
    var bLogo;

    function setValue(e) {
        e.target.name == "b_Name" && setB_name(e.target.value);
        e.target.name == "b_Type" && setB_type(e.target.value);
        e.target.name == "b_Desc" && setB_desc(e.target.value);
        e.target.name == "b_Logo" && (bLogo = e.target.files[0]);
    }
    // useEffect(() => {
    //     if (stid) {
    //         axios.get("http://localhost:5000/users-by-id" + stid).then(function (res) {
    //             console.log(res.data.data);
    //         })
    //     }
    // }, [])

    const user = useSelector(state => state.user);
    const userEmail = user.email
    const userMobile = user.mob

    // function sendData() {
    //     var formData = new FormData();

    //     formData.append("b_detailes", JSON.stringify({ b_name, b_type, b_desc, roll: "vendor" }))
    //     // formData.append("user", user._id);
    //     formData.append("user", JSON.stringify(user));
    //     formData.append("b_Logo", bLogo);
    //     console.log("formData", formData);
    //     // console.warn(formData);

    //     axios.post('http://localhost:7000/update_seller', formData, {
    //         headers: {
    //             'Content-type': 'multipart / form - data'
    //         },
    //         onUploadProgress: function (progressEvent) {
    //             console.log("file upload progress:" + progressEvent);
    //             setuploadPercentage(parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100)));
    //         }

    //     }).then((res) => {
    //         alert("upload fd suc")
    //         console.log("res is", res.data);
    //     }).catch((err) => {
    //         alert("upload fd err")
    //     })

    // }

    function sendData() {

        var formData = new FormData();
        formData.append("b_detailes", JSON.stringify({ b_name, b_type, b_desc, roll: "vendor" }));
        formData.append("user", JSON.stringify(user));
        formData.append("b_Logo", bLogo);
        console.log(formData);
        axios.post('http://localhost:7000/update_seller', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
                console.log("file upload progress: " + progressEvent);
                setuploadPercentage(parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100)));
            }
        }).then((res) => {
            alert("Upload formData success");
            alert("You are now vender.. Please login again ");
        }).catch((err) => {
            alert("Upload formData error");
        })
    }

    return (
        <div className="lhome">

            <div className="home">
                <div className="form_img">
                    <h3>Login</h3>
                    <p>Get access to your <br /> Orders, Wishlist and <br /> Recommendations</p>
                    <img src="login_img_c4a81e.png" alt="" />
                </div>

                <div className="form">
                    <div className="formm">
                        <br />
                        <input type="email" placeholder="Enter Your Email Id" value={userEmail} disabled></input><br /><br />
                        <input type="text" placeholder="Enter Your Mobile Number" value={userMobile} disabled /> <br /><br />

                        <input type="text" placeholder="Enter Your Business Name" name="b_Name" value={b_name} onChange={function (e) { setValue(e) }} /> <br /><br />
                        <input type="text" placeholder="Enter Your Business Type" name="b_Type" value={b_type} onChange={function (e) { setValue(e) }} /> <br /><br />
                        <input type="text" placeholder="Enter Your Business Description" name="b_Desc" value={b_desc} onChange={function (e) { setValue(e) }} /><br /> <br />
                        <input type="file" placeholder="Enter Your Business Logo" name="b_Logo" onChange={function (e) { setValue(e) }} />                         {uploadPercentage}%
                        <br /><br />


                        <button className="cr_ac_btn2" onClick={sendData}>update account</button>
                        {/* <button className="btn btn-success" onClick={sendData}></button> */}
                        <br /><br />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerLogin



// function sendData() {
//     var slr = {
//         b_detailes: { b_name, b_type, b_desc, roll: "vendor" },
//         user: user._id
//     }

//     axios.post('http://localhost:7000/update_seller', slr).then(function (res) {
//         console.log(res.data);
//         alert(res.data)
//         if (res.data.status == "ok") {
//             dispatch(setUser({ ...user, roll: "vendor" }));
//         }
//     })
// }