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
            
            
            <img className="navbar_signUp" src ="ampu.png" alt="PrawinPravs">
                {/* src="ampu.png" alt="PrawinPravs"> */}
                </img>
        </div>
    )
}

export default Nav
