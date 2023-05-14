import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            emailid: '',
            mobilenumber: '',
            password: '',
        }


    }

    Handler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitHandler = e => {
        e.preventDefault()
        // console.log(this.state) ;
        console.log(this.state);


        axios
            .post("http://localhost:8090/customer/save", this.state)
            .then(res => {
                console.log(res);
                window.location = 'http://localhost:3000/login';
            }
            );
    }



    render() {

        const { firstname, lastname, emailid, mobilenumber, password } = this.state

        return (
            <div class="container text-center"><br /><br />

                <section class="background-radial-gradient overflow-hidden">

                    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                        <div class="row gx-lg-5 align-items-center mb-5">
                            <div class="col-lg-6 mb-5 mb-lg-0" style={{ "z-index": "10" }}>
                                <h1 class="my-5 display-5 fw-bold ls-tight" style={{ "color": "hsl(218, 81%, 95%)" }}>
                                    The best Medical Shop <br />
                                    <span style={{ "color": "hsl(218, 81%, 75%)" }}>for your home</span>
                                </h1>
                                <p class="mb-4 opacity-70" style={{ "color": "hsl(218, 81%, 85%)", "text-align": "justify" }}>
                                    We Believe in ‘Simplifying Healthcare, Impacting Lives!’. We are led by a young, enthusiastic and forward looking second generation management,
                                    and continue our upward trajectory with a shared vision of delivering both excellence and trust.
                                </p>
                            </div>

                            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                                <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                                <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                                <div class="card bg-glass">
                                    <div class="card-body px-4 py-5 px-md-5">
                                        <form onSubmit={this.SubmitHandler} >

                                            <div class="row">
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <input onChange={this.Handler} value={firstname} name="firstname" placeholder="First Name" type="text" id="form3Example1" class="form-control" required />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-4">
                                                    <div class="form-outline">
                                                        <input onChange={this.Handler} value={lastname} name="lastname" placeholder="Last Name" type="text" id="form3Example2" class="form-control" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input onChange={this.Handler} value={emailid} name="emailid" placeholder="Email ID" type="email" id="form3Example3" class="form-control" required />
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input onChange={this.Handler} value={mobilenumber} name="mobilenumber" placeholder="Mobile No." type="text" id="form3Example3" class="form-control" required />
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input onChange={this.Handler} value={password} name="password" placeholder="Password" type="password" id="form3Example4" class="form-control" required />
                                            </div>

                                           

                                            <button type="submit" class="btn btn-primary btn-block mb-4"> Sign up </button>

                                           

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>



          
        );
    }
}

export default Registration;