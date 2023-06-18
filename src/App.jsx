import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer/Footer'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Bestspot from './Pages/Best-spots/Bestspot'


export default function App() {
  return (
    <>
        <div className='Main-div-container'>
        <Router>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/About' element={<About/>}></Route>
              <Route path='/Bestspot' element={<Bestspot/>}></Route>
            </Routes>
        </Router>   
                 
        </div>
    </>
  )
}
