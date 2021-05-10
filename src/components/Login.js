import React from 'react';
import "./styles/Login.css";
import {Button} from "@material-ui/core";

const Login = () => {

    const signIn = () => {
    //     sign in function
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to Rokas WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
};

export default Login;
