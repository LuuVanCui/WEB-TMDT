import React from 'react';
import './sign-in.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            response: '',
            isLogin: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit() {
        const { username, password } = this.state;

        axios.post(
            '/api/auth/login',
            { username: username, password: password})
            .then(res => {
                console.log(res);
                this.setState({isLogin: true});
                return <Link to="/" />
            })
            .catch(err => {
                console.log(err);
            });
        
        // if (this.state.isLogin) {
        //     return <Redirect to="/" />
        // }
    }

    render() {
        return(
            <div className="login-box">
                <h1>Login</h1>
                <div className="textbox">
                    <i className="fa fa-user" />
                    <input type="text" placeholder="Username" 
                        value={this.state.username}
                        onChange={e => this.setState({username: e.target.value})}
                    />
                </div>
                <div className="textbox">
                    <i className="fa fa-key" />
                    <input type="text" placeholder="Password" 
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                    />
                </div>
                <button type="button" onClick={this.handleSubmit}>Login</button>
            </div>
        );
    }
}