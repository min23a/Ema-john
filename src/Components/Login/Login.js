import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { userInfo } from '../../App';
import { Redirect } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(userInfo);
    const { displayName } = user;
    const GProvider = new firebase.auth.GoogleAuthProvider();
    const handleGSignIn = () => {
        firebase.auth()
            .signInWithPopup(GProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="login">

            { displayName ?
                <div>
                    <h4 style={{ color: 'green' }} >Logged In Successfully!</h4>
                    <Redirect to="/checkout"/>
                </div>
                :
                <button className="google_login" onClick={handleGSignIn}>
                    <span className="g_icon">
                        <FontAwesomeIcon icon={faGoogle} />
                    </span>
                    Sign In
                </button>
            }
        </div>
    );
};

export default Login;