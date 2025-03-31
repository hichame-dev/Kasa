import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg' // remplace par ton vrai logo
import '../styles/Header.scss'

function Header() {
    const location = useLocation()

    return (
        <header className="header">
            <img src={logo} alt="Kasa" className="header__logo" />

            <nav className="header__nav">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                <Link to="/a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header
