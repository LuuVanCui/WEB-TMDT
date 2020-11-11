import Head from 'next/head';
import React, { Component } from 'react';
import axios from 'axios';
import loginStyle from '../styles/Login/login';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }

        this.handleLogin = this.handleLogin.bind(this);
    } 

    async handleLogin() {
        const { username, password } = this.state;

        axios.post(`${process.env.NEXT_PUBLIC_PORT}/auth/login`, { username, password })
            .then(res => {
                        // localStorage.setItem('token', res.data.token);
                        // this.setState({loggedIn: true});  
                        // console.log(res.data);
                        console.log('ok');
                    })
            .catch(err => {
                console.log(err);
            });

            // console.log(this.state.loggedIn);
            // if (this.state.loggedIn) {
            //     return <Redirect to="/" />
            // }
    }

    render() {
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <title>RealShare</title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {/* Favicon */}
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                </Head>
                
                <main>
                    <div className="main-wrapper pb-0 mb-0">
                        <div className="timeline-wrapper">
                            <div className="timeline-header">
                                <div className="container-fluid p-0">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-lg-6">
                                            <div className="timeline-logo-area d-flex align-items-center">
                                                <div className="timeline-logo">
                                                    <a href="index.html">
                                                        <img
                                                            src=""
                                                            alt="timeline logo"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="timeline-tagline">
                                                    <h6 className="tagline">
                                                        It’s helps you to connect and share with the people
                                                        in your life
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="login-area">
                                                <div className="row align-items-center">
                                                    <div className="col-12 col-sm">
                                                        <input
                                                            type="text"
                                                            placeholder="Email or Userame"
                                                            className="single-field"
                                                            onChange = {e => this.setState({username: e.target.value})}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-sm">
                                                        <input
                                                            type="password"
                                                            placeholder="Password"
                                                            className="single-field"
                                                            onChange = {e => this.setState({password: e.target.value})}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-sm-auto">
                                                        <button className="login-btn" onClick={this.handleLogin}>Login</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-page-wrapper">
                                <div className="container-fluid p-0">
                                    <div className="row no-gutters">
                                        <div className="col-lg-6 order-2 order-lg-1">
                                            <div
                                                className="timeline-bg-content bg-img"
                                                data-bg="assets/images/timeline/adda-timeline.jpg">
                                                <h3 className="timeline-bg-title">
                                                    Let’s see what’s happening to you and your world.
                                                    Welcome in Adda.
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
                                            <div className="signup-form-wrapper">
                                                <h1 className="create-acc text-center">
                                                    Create An Account
                                                </h1>
                                                <div className="signup-inner text-center">
                                                    <h3 className="title">Wellcome to Adda</h3>
                                                    <form className="signup-inner--form">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <input
                                                                    type="email"
                                                                    className="single-field"
                                                                    placeholder="Email"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="single-field"
                                                                    placeholder="First Name"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input
                                                                    type="text"
                                                                    className="single-field"
                                                                    placeholder="Last Name"
                                                                />
                                                            </div>
                                                            <div className="col-12">
                                                                <input
                                                                    type="password"
                                                                    className="single-field"
                                                                    placeholder="Password"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="nice-select"
                                                                    name="sortby">
                                                                    <option value="trending">Gender</option>
                                                                    <option value="sales">Male</option>
                                                                    <option value="sales">Female</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <select
                                                                    className="nice-select"
                                                                    name="sortby">
                                                                    <option value="trending">Age</option>
                                                                    <option value="sales">18+</option>
                                                                    <option value="sales">18-</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-12">
                                                                <select
                                                                    className="nice-select"
                                                                    name="sortby">
                                                                    <option value="trending">
                                                                        Country
                                                                    </option>
                                                                    <option value="sales">
                                                                        Bangladesh
                                                                    </option>
                                                                    <option value="sales">Noakhali</option>
                                                                    <option value="sales">Australia</option>
                                                                    <option value="sales">China</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="submit-btn">
                                                                    Create Account
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <h6 className="terms-condition">
                                                            I have read &amp; accepted the{' '}
                                                            <a href="#section">terms of use</a>
                                                        </h6>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <style jsx>{loginStyle}</style>
            </>
        );
    }
}
