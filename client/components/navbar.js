import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import leftArrow from '../assets_images/left-arrow.png';
import logOut from '../assets_images/logout.png';




export default function Navbar() {

    return (
    <div className='NavBar'>
        <Link to='/home'>
            <img className="leftArrowBtn" src={leftArrow}/>
        </Link>       
        <Link to='/'>
            <img className="logoutBtn" src={logOut}/>
        </Link>
    </div>
    )
  }
