import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftNav'>logo</div>
            <div className='rightNav'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contactus"}>Contact Us</Link>
                <Link to={"/admin"}>Admin</Link>
            </div>
        </div>
    )
}
