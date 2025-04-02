import { useParams, Navigate } from 'react-router-dom';
import logements from '../components/data/logements.json';
import Slideshow from '../components/Slideshow.jsx';
import Collapse from '../components/Collapse.jsx';
import '../styles/FicheLogement.scss';

function FicheLogement() {
    const { id } = useParams()

    // Récupération dynamique du logement par l'ID
    const logement = logements.find(logement => logement.id === id)

    if (!logement) {
        // Si logement non trouvé, redirection vers 404
        return <Navigate to="/404" />
    }

    // Affichage des informations dynamiques
    return (
        <div className="fiche-logement">
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
                        {logement.rating} ⭐
                    </div>
                </div>
            </div>

            <div className="collapses-container">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map(equipment => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    )
}

export default FicheLogement
