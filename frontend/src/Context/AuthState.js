import React from "react";
import AuthContext from "./AuthContext";
const host = "https://fcjnotebook.onrender.com/";

export const AuthState = (props) => {
  //Login
  const HandleLogin = async (email, password) => {
    const url = `${host}u/auth/login`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if (json.success) {
      // console.log(json);
    } else {
      alert("please enter valid credentials");
    }
    return json;
  };

  // Signup
  const HandleSignup = async (UserData) => {
    //console.log("singup");
    const { name, email, password, gender } = UserData;
    const url = `${host}u/auth/creat`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ name, email, password, gender }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if (json.success) {
      // console.log(json);
    } else {
      alert("please enter valid credentials");
    }
    return json;
  };

  return (
    <div>
      <AuthContext.Provider value={{ HandleLogin, HandleSignup }}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
};
