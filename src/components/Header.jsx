import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/Header.scss'

function Header() {
    const location = useLocation()

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="Kasa" className="header__logo" />
                <nav className="header__nav">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                    <Link to="/a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}>A Propos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
