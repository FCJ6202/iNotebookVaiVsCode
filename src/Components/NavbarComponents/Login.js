import React, { useContext, useState } from 'react'
import AuthContext from '../../Context/AuthContext'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [credential, setcredential] = useState({
        email: "",
        password: ""
    })
    const HandleOnchange = (e) => {
        setcredential({ ...credential, [e.target.id]: e.target.value });
    }
    const Default = () => {
        setcredential({
            email: "",
            password: ""
        });
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const msg = await auth.HandleLogin(credential.email, credential.password);
        Default();
        console.log(msg.success);
        if(msg.success){
            localStorage.setItem("token",msg.authToken);
            navigate("/");
        }
    }
    return (
        <form className='container my-3 col-md-4'>
            <h5 className="text-center">Login in iNotebook</h5>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={credential.email} onChange={HandleOnchange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={credential.password} onChange={HandleOnchange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={HandleSubmit} >Login</button>
        </form>
    )
}
