import { Link } from 'react-router-dom';
import '../styles/Error404.scss';

function Error404() {
    return (
        <div className="error">
            <h1 className="error__code">404</h1>
            <p className="error__message">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error__link">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default Error404;


