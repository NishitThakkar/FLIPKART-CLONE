import axios from 'axios';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/FlipCartActions';
import '../css/Login.css';
import $ from 'jquery';

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    function log(e) {
        e.target.name == "Emailid" && setEmail(e.target.value);
        e.target.name == "Password" && setPassword(e.target.value);
    }

    function loginCheck() {

        axios.post('http://localhost:7000/login_user', { email, password }).then(function (res) {
            console.log(res.data)
            if (res.data.status == "ok") {

                // user add karva mate
                dispatch(setUser(res.data.data));
                props.history.push("/");
            }
            else {
                alert("credential not correct")
            }
        });
    }
    function cr_ac() {
        props.history.push("/Cr_ac")
    }

    return (
        <div className="lhome" >
            <div className="home">
                <div className="form_img">
                    <h3>Login</h3>
                    <p>Get access to your <br /> Orders, Wishlist and <br /> Recommendations</p>
                    <img src="login_img_c4a81e.png" alt="" />
                </div>

                <div className="form">
                    <div className="formm">
                        <input type="text" name="Emailid" value={email} onChange={function (e) { log(e) }} placeholder="enter your email id" /> <br /> <br />
                        <input type="password" name="Password" value={password} onChange={function (e) { log(e) }} placeholder="enter your password" /> <br /> <br />
                        <button type="submit" className="loginbtn" onClick={function () { loginCheck() }}>Log In</button>

                        <br /><br /> OR<br /><br />

                        <button type="submit" className="cr_ac_btn" onClick={cr_ac}>Create an account</button>

                        {/* <Link exact to="/Cr_ac">
                            <h5>New in Ecommerce? Create an account</h5> </Link> <br /><br /> */}
                        <Link exact to="/ForgotPassword">
                            <h5 style={{ marginTop: 10 }} className="abcde">Forget Password ? </h5> </Link>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
