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
            
            <img className="navbar_signUp" src ="https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/100773906_1556172277866253_1073650573124829184_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=QBNLcFh9opoAX8pc8Cq&_nc_ht=scontent.fblr1-4.fna&oh=5513bf96d37584051b8022bb73b59e61&oe=607E02FA" alt="PrawinPravs">
                {/* src="https://drive.google.com/file/d/1ZlkQYAkN5HCwjBR1jkelIQIznsk3b3QN/view" alt="PrawinPravs"> */}
                </img>
        </div>
    )
}

export default Nav
