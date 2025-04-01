import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <img src={logo} alt="Logo Kasa" className="header__logo" />
                <nav className="header__nav">
                    <NavLink to="/" end>
                        Accueil
                    </NavLink>
                    <NavLink to="/a-propos">
                        A Propos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
