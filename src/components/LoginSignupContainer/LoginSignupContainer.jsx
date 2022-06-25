import React from "react";
import "./LoginSignupContainer.css";
import {useState} from "react";
import {useRef} from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const LoginSignupContainer = () => {
    const[login, setLogin] = useState(true);
    const loginSignupContainerRef = useRef(null);   

    const handleClick = () => {
        setLogin(!login);
        loginSignupContainerRef.current.classList.toggle("active");
    };
    return (
    <div className="login-signup-container" ref={loginSignupContainerRef}>
         <Login /> 
        <div className="side-div">
            <button type="button" onClick={handleClick}> 
            {" "}
            {login ? "Signup" : "Login"}
            </button>
        </div>
        <Signup /> 

       </div>
    );
};
 export default LoginSignupContainer;