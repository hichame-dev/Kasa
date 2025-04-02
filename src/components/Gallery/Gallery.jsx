import React from 'react';
import Card from '../Card/Card';
import "../../styles/Gallery.scss";



function Gallery({ logements }) { // Ajoute la réception de la prop 'logements'
    return (
        <section className="gallery">
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
        </section>
    );
}


export default Gallery;