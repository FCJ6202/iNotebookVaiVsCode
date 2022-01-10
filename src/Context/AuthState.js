import React from 'react'
import AuthContext from './AuthContext'

export const AuthState = (props) => {
    //Login
    const HandleLogin = async (email, password) => {
        const url = "http://localhost:4000/u/auth/login";
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email, password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        if(json.success){
            console.log(json);
            localStorage.setItem("token",json.token);
        }else{
            alert("please enter valid credentials");
        }
        return json.success;
    }

    // Signup
    const HandleSignup = async (UserData) => {
        //console.log("singup");
        const {name, email, password,gender } = UserData;
        const url = "http://localhost:4000/u/auth/create";
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({name, email, password,gender }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        if(json.success){
            console.log(json);
            localStorage.setItem("token",json.token);
        }else{
            alert("please enter valid credentials");
        }
        return json.success;
    }


    return (
        <div>
            <AuthContext.Provider value={{ HandleLogin, HandleSignup }}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )
}
