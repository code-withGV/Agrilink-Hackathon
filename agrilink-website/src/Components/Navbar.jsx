import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <RouterLink to='/' className='logo'>
                <img src={logo} alt='' />
            </RouterLink>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li>
                    <ScrollLink to='main' smooth={true} duration={1000}>Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='features' smooth={true} duration={1000}>Features</ScrollLink>
                </li>
                <li>
                    <RouterLink to='/marketplace'>MarketPlace</RouterLink>
                </li>
                <li>
                    <ScrollLink to='about' smooth={true} duration={1000}>About</ScrollLink>
                </li>
                <li>
                    <RouterLink to='/register'>Register</RouterLink>
                </li>
                <li>
                    <RouterLink to='/government-schemes'>Government Schemes</RouterLink>
                </li>
                <li>
                    <RouterLink to='/damage-alerts'>Damage Alerts</RouterLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
