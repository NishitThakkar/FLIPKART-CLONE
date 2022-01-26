
import { React } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function ForgotPassword() {

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
        <div>

            <section id="inner-headline">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="pageTitle">Forget Password</h2>
                        </div>
                    </div>
                </div>
            </section>


            <div class="container ">
                <div class="row side">
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
                </div>
            </div>

        </div>

    )
}
