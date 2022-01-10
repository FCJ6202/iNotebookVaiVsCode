import React from 'react'
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/NavbarComponents/Home';
import About from './Components/NavbarComponents/About';
import NoteState from './Context/NoteState';
import Alert from './Components/Alert';
import { Login } from './Components/NavbarComponents/Login';
import { Signup } from './Components/NavbarComponents/Signup';
import { AuthState } from './Context/AuthState';

export default function App() {
  return (
    <div>
      <AuthState>
        <NoteState>
          <Router>
            <Navbar />
            {/* <Alert message = "check" type = "success"/> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        </NoteState>
      </AuthState>
    </div>
  )
}

