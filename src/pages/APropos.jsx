import React from 'react';
import Banner from '../components/Banner';
import bannerImg from '../assets/Banner__img.svg';
import Collapse from '../components/Collapse';
import '../styles/APropos.scss';

function APropos() {
    return (
        <main className="main">
            <div className="main__container">
                <Banner image={bannerImg} text="" />

                <section className="a-propos">
                    <Collapse title="Fiabilité">
                        <p>
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                            et toutes les informations sont régulièrement vérifiées par nos équipes.
                        </p>
                    </Collapse>

                    <Collapse title="Respect">
                        <p>
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur
                            entraînera une exclusion de notre plateforme.
                        </p>
                    </Collapse>

                    <Collapse title="Service">
                        <p>
                            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter
                            si vous avez la moindre question.
                        </p>
                    </Collapse>

                    <Collapse title="Sécurité">
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond
                            aux critères de sécurité établis par nos services. La sécurité est la priorité de Kasa.
                        </p>
                    </Collapse>
                </section>
            </div>
        </main>
    );
}

export default APropos;
