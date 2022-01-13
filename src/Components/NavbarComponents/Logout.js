import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {

    const navigate = useNavigate();

    const HandleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={HandleLogout} >Logout</button>
        </div>
    )
}
