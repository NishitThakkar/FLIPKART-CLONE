import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ForgotPassword() {
    const [email, setEmail] = useState("")
    function setValue(e) {

        e.target.name === "Email" && setEmail(e.target.value);

    }
    function Sendpassword() {
        alert(email)
        var s = {
            email
        }
        axios.post("http://localhost:7000/user-by-email", s).then((res) => {
            console.log(res.data.data)
            alert("completed")
        })
    }
    return (
        <div className="lhome">

            {/* <section id="inner-headline">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="pageTitle">Forget Password</h2>
                        </div>
                    </div>
                </div>
            </section> */}


            <div class="container ">
                {/* <div class="row side">
                    <div class="col-lg-5 text-center ">
                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Forget Password</h3></div>
                            <div class="card-body">
                                <form>
                                    <div class="form-floating mb-3">
                                        <label for="inputEmail">Email</label>
                                        <input class="form-control" id="inputEmail" type="email" name="Email" placeholder="name@example.com" value={email} onChange={(e) => { setValue(e) }} />
                                    </div> <br />
                                    <button type="button" className=" btn-primary" onClick={Sendpassword}>Send Password</button>


                                </form>
                            </div>

                        </div>
                    </div>
                </div> */}


                <div className="home">
                    <div className="form_img">
                        <h3>Login</h3>
                        <p>Get access to your <br /> Orders, Wishlist and <br /> Recommendations</p>
                        <img src="login_img_c4a81e.png" alt="" />
                    </div>

                    <div className="form">
                        <div className="formm">
                            <input type="email" name="Email" placeholder="Enter Your Email id " value={email} onChange={(e) => { setValue(e) }} />

                            <br /><br /> <br /><br />
                            <button type="submit" className="cr_ac_btn" onClick={Sendpassword}>Send Password</button>
                            <br /><br />
                            <Link to="/Login" ><h5 className="abcde">Click here to Log in</h5></Link>

                        </div>
                    </div>
                </div>
            </div>

        </div >


    )
}

export default ForgotPassword
