import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext'

export const Signup = () => {
    const auth = useContext(AuthContext);
    const Navigate = useNavigate();

    const [credential, setcredential] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        gender: ""
    })
    const HandleOnchange = (e) => {
        setcredential({ ...credential, [e.target.id]: e.target.value });
    }

    const CheckGender = () => {
        if (document.getElementById("male").checked) {
            return "male";
        } else if (document.getElementById("female").checked) {
            return "female";
        } else if (document.getElementById("other").checked) {
            return "other"
        } else {
            return null;
        }
    }

    const Default = () => {
        setcredential({
            name: "",
            email: "",
            password: "",
            cpassword: "",
            gender: ""
        });
        document.getElementById("male").checked = false;
        document.getElementById("female").checked = false;
        document.getElementById("other").checked = false;
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        credential.gender = CheckGender();
        if (credential.gender == null) {
            alert("please select the gender");
            return;
        }

        if (credential.password !== credential.cpassword) {
            alert("please enter the same password in confirm password");
        } else {
            //console.log(credential);
            const msg = await auth.HandleSignup(credential);
            Default();
            if(msg){
                Navigate("/");
            }
        }
        //auth.HandleLogin(credential.email,credential.password);
    }

    return (
        <div className='container my-3 col-md-4'>
            <div className="d-flex justify-content-center">
                <h5>Create Account in iNotebook</h5>
            </div>
            <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={credential.name} required onChange={HandleOnchange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                    <div className="form-check mx-3">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="male" value="option1" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Male
                        </label>
                    </div>
                    <div className="form-check mx-3">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="female" value="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Female
                        </label>
                    </div>
                    <div className="form-check mx-3">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="other" value="option3" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Others
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={HandleOnchange} aria-describedby="emailHelp" required value={credential.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={HandleOnchange} minLength={4} required value={credential.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" onChange={HandleOnchange} minLength={4} required value={credential.cpassword} />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary d-flex justify-content-center" >Register</button>
                </div>
            </form >

        </div>
    )
}
