import React from 'react';
import "./styles/Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const Login = () => {
    // dispatch shoots the data to the data layer
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
    //     sign in function
        auth.signInWithPopup(provider).then(result => {
            // we send this data to the data layer,
            // the action type, we add the action type object, and then the payload as the user, with the result object, it received from Google
            // and it becomes the user object inside the data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch(error => alert(error.message));
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
