import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../../assets/4.3 crown.svg';

function Header() {
  return (
    <div className="header">
        <Link to={"/"} className='logo-container'>
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to={"/shop"} className="option">
                SHOP
            </Link>
            <Link className="option">
                CONTACT
            </Link>
        </div>
    </div>
  )
}

export default Header