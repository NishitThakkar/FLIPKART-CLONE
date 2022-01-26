import axios from 'axios';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
function Cr_ac(props) {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [mob, setMob] = useState()
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [roll, setRoll] = useState("")
    const [errr, seterr] = useState("")

    function setValue(e) {
        e.target.name == "Username" && setUserName(e.target.value);
        e.target.name == "Email" && setEmail(e.target.value);
        e.target.name == "Age" && setAge(e.target.value);
        e.target.name == "Mob" && setMob(e.target.value);
        e.target.name == "Address" && setAddress(e.target.value);
        e.target.name == "Password" && setPassword(e.target.value);
        e.target.name == "CPassword" && setCPassword(e.target.value);
        e.target.name == "Roll" && setRoll(e.target.value);
    }

    // function sendData() {
    //     if (password != cpassword) {
    //         seterr("Password not matched")
    //     } else {
    //         seterr("")

    //         var usr = {
    //             userName, email, age, mob, address, password, roll: "customer"
    //         }
    //         console.log(usr);
    //         axios.post('http://localhost:7000/create_user', usr).then(function (res) {
    //             console.log(res.data);
    //             alert(res.data)
    //         })
    //     }
    // }
    function sendData() {
        var unRegex = /^[a-z0-9_-]{3,8}$/
        var usernameV = document.getElementById('usernameId').value

        var passRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
        var passwordV = document.getElementById('passwordId').value

        var emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
        var emailV = document.getElementById('emailId').value
        if (userName.length < 3) {
            alert("username must be 3 char")
        }
        else if (!passRegex.test(passwordV)) {
            alert("Password Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long")
        }
        else if (password != cpassword) {
            seterr("Password not matched")
        }
        else if (!emailRegex.test(emailV)) {
            alert("wrong email id")
        }
        else if (mob.length != 13) {
            alert("mobile number is incorrect")
        }
        else if (age.length != 2) {
            alert("Age is Wrong")
        }

        else {
            seterr("")
            var usr = {
                userName, email, age, mob, address, password, roll: "customer"
            }
            console.log(usr);
            axios.post('http://localhost:7000/create_user', usr).then(function (res) {
                console.log(res.data);
                alert(res.data)
            })

        }
    }

    return (
        <div className="lhome">
            <div className="home2">
                <div className="form_img">
                    <h3>Login</h3>
                    <p>Get access to your <br /> Orders, Wishlist and <br /> Recommendations</p>
                    <img src="login_img_c4a81e.png" />
                </div>

                <div className="form">
                    <div className="formm">
                        <br />

                        <input type="text" name="Username" value={userName} id="usernameId" onChange={function (e) { setValue(e) }} placeholder="Enter User Name" /> <br /><br />
                        <input type="email" name="Email" value={email} id="emailId" onChange={function (e) { setValue(e) }} placeholder="Enter Email id" /><br /><br />
                        {/* <input type="number" name="Mob" value={mob} id="mobId" onChange={function (e) { setValue(e) }} placeholder="Enter mobile number" required /> <br /><br /> */}
                        <input type="number" name="Age" value={age} id="ageId" onChange={function (e) { setValue(e) }} placeholder="Enter Age " /> <br /><br />
                        <input type="texta-area" name="Address" value={address} onChange={function (e) { setValue(e) }} placeholder="Enter Address" /> <br /><br />
                        <input type="text" name="Password" id="passwordId" value={password} onChange={function (e) { setValue(e) }} placeholder="Enter Password" /> <br /><br />

                        <input type="text" id="cpasswordId" value={cpassword} onChange={function (e) { setValue(e) }} name="CPassword" placeholder="Enter Confirm Password" /> <br /><br />
                        {errr}
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={mob}
                            onChange={setMob}
                        /> <br />
                        {mob} <br />
                        <button type="submit" className="cr_ac_btn" onClick={sendData}>Create an account</button>

                        <br />
                        {/* <PhoneInput
                            placeholder="Enter phone number"
                            name="mobile"
                            value={mobile} onChange={function (e) { setValue(e) }} />
                        <Link to="/Login" ><h5 className="abcde">Existing User? Log in</h5></Link> */}


                    </div>
                </div>



            </div>
        </div>
    )
}

export default Cr_ac
