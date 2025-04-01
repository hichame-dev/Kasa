import React from 'react';
import Card from '../Card/Card';
import logements from '../data/logements.json'; // Adjust the path as necessary
import "../../styles/Gallery.scss";

 // Adjust the path as necessary

function Gallery() {
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
