import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import './SignIn.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils.js'

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();


    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                        type="email"
                    />
                    <FormInput
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label="Password"
                        type="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>{" "}Sign in with Google{" "}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;