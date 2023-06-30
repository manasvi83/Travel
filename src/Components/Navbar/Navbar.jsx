import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <>    
        <div className='navbars'>
            <h1> Manali</h1>
            <nav className='navigate'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/location">Location</Link>
                <Link to="/bestspot">Best Spots</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div> 
        </>
    )
}
