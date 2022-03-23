import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import "firebase/auth";
import firebase from 'firebase/app';
import { auth } from '../firebase';

const Login = () => {

    return (
        <div id="login-page">
            {/* //** this is full loging card  * */}

            <div id='login-card'>
                <h2>Welcome to My_Chat!</h2>
                <div
                    className="login-button google"
                    onClick={() =>
                        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br /> <br />

                <div className="login-button facebook"
                    onClick={() =>
                        auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined />  Sign In with Facebook
                </div>

            </div>
        </div>
    )
};

export default Login;