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

export default function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar/>
          {/* <Alert message = "check" type = "success"/> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </div>
  )
}

