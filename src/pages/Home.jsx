import React from 'react';
import Banner from '../components/Banner';
import Banner_img from '../assets/Banner__img.svg';
import Gallery from '../components/Gallery/Gallery';

function Home({ logements }) {
    return (
        <main className="main">
            <div className="main__container">
                <Banner image={Banner_img} text="Chez vous, partout et ailleurs" />
                <Gallery logements={logements} />
            </div>
        </main>
    );
}

export default Home;
