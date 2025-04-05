import { useParams, Navigate } from 'react-router-dom';
import logements from '../components/data/logements.json';
import Slideshow from '../components/Slideshow.jsx';
import Collapse from '../components/Collapse.jsx';
import redStar from '../assets/star_red.png';
import grayStar from '../assets/star_gray.png';
import '../styles/FicheLogement.scss';

function FicheLogement() {
    const { id } = useParams(); // Récupération de l’ID de l’URL

    const logement = logements.find(logement => logement.id === id); // Recherche du logement correspondant

    if (!logement) {
        return <Navigate to="/404" />; // Redirection si aucun logement trouvé
    }

    return (
        <main className="main">
            <div className="main__container fiche-logement">
                <Slideshow images={logement.pictures} />

                <div className="fiche-header">
                    <div className="infos">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <div className="tags">
                            {logement.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="host-rating">
                        <div className="host">
                            <span>{logement.host.name}</span>
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                        <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={i < Number(logement.rating) ? redStar : grayStar}
                                    alt="étoile"
                                    className="star"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="collapses-container">
                    <Collapse title="Description" className="fiche-collapse">
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse title="Équipements" className="fiche-collapse">
                        <ul>
                            {logement.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </main>
    );
}

export default FicheLogement;
