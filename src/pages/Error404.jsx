import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.scss';

function Erreur404() {
    return (
        <section className="erreur404">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
    );
}

export default Erreur404;
