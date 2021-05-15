import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className ={`navbar ${show && 'navbar_black'}`}>
            <img className="navbar_logo"        
                src="netflix.png"alt="Netflix Logo">
            </img>  
            
            <img className="navbar_signUp" src ="ampu.png" alt="PrawinPravs">
                {/* src="https://drive.google.com/file/d/1ZlkQYAkN5HCwjBR1jkelIQIznsk3b3QN/view" alt="PrawinPravs"> */}
                </img>
        </div>
    )
}

export default Nav
