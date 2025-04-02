import React from 'react'; // Ajoute l'import de React (bien que pas strictement nécessaire ici, bonne pratique)
import Banner from '../components/Banner';
import Banner_img from '../assets/Banner__img.svg';
import Gallery from '../components/Gallery/Gallery';

function Home({ logements }) { // Ajoute la réception de la prop 'logements'
    return (
        <div>
            <Banner image={Banner_img} text="Chez vous, partout et ailleurs" />
            <Gallery logements={logements} /> {/* Passe la prop 'logements' à Gallery */}
        </div>
    );
}

export default Home;