import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import './Navbar.css'
import { useState } from 'react';

function Navbar() {

    const [isOpen,setIsOpen]=useState(false);

    const toggleNav=()=>{
        setIsOpen(!isOpen);
    }

    const [screenWidth,setSecreenWidth]=useState(window.innerWidth);

    useEffect(()=>{
        const changeWidth=()=>{
            setSecreenWidth(window.innerWidth);
        }
        window.addEventListener('resize',changeWidth);

        return(()=>{
            window.removeEventListener('resize',changeWidth);
        })
    },[]);

  return (
    <div>
        {/* Screen Navigation */}
      <div className="navigation" >
        <div className="navHome">
            <h1>Soft<span>ware</span></h1>
        </div> 
            <div className="navList">

                {(isOpen || screenWidth > 670)&& (
                    <ul>
                    <Link to={'/'}>
                        <li onClick={toggleNav}>
                            Home
                        </li>
                    </Link>
                    <Link to={'/About'} >
                        <li onClick={toggleNav}>
                            About
                        </li>
                    </Link>
                    <Link to={'/Login'}>
                        <li onClick={toggleNav}>
                            Login
                        </li>
                    </Link>
                    <Link to={'/Contact'}>
                        <li onClick={toggleNav}>
                            Contact
                        </li>
                    </Link>
                </ul>
                )}
                    
            </div>
            <FaBars className="bars" onClick={toggleNav}/>
        </div>
      {/* End of Screen Navigation */}
    </div>
  )
}

export default Navbar
