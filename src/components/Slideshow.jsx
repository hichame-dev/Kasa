// Slideshow.jsx
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Slideshow.scss'; // Assurez-vous d'avoir votre fichier SCSS
import '../components/data/logements.json'; // Assurez-vous que le chemin est correct

// Importez le fichier JSON (ou utilisez fetch pour un fichier externe)

const Slideshow = () => { // **Nom du composant changé en Slideshow**
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const trackRef = useRef(null);
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('./data/data.json') // Ajustez le chemin si nécessaire
            .then(response => response.json())
            .then(data => {
                setSlides(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur lors du chargement du JSON:", error);
                setLoading(false);
            });
    }, []);

    const slidesCount = slides.length;

    const nextSlide = () => {
        if (isTransitioning || slidesCount <= 1) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesCount);
    };

    const prevSlide = () => {
        if (isTransitioning || slidesCount <= 1) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesCount) % slidesCount);
    };

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    useEffect(() => {
        const transitionEndHandler = () => {
            setIsTransitioning(false);
        };

        const trackElement = trackRef.current;
        if (trackElement) {
            trackElement.addEventListener('transitionend', transitionEndHandler);
            return () => {
                trackElement.removeEventListener('transitionend', transitionEndHandler);
            };
        }
    }, []);

    if (loading) {
        return <div className="Slideshow-container">Chargement des images...</div>; // Classe CSS mise à jour
    }

    if (slidesCount === 0) {
        return <div className="Slideshow-container">Aucune image à afficher.</div>; // Classe CSS mise à jour
    }

    return (
        <div className="Slideshow-container"> {/* Classe CSS mise à jour */}
            <div className="Slideshow-track" ref={trackRef}> {/* Classe CSS mise à jour */}
                {slides.map((slide, index) => (
                    <div key={index} className="Slideshow-slide"> {/* Classe CSS mise à jour */}
                        <img src={slide.imageSrc} alt={`Slide ${index + 1} - ${slide.genre}`} />
                        <div className="slide-genre">Genre: {slide.genre}</div>
                    </div>
                ))}
            </div>

            {slidesCount > 1 && (
                <>
                    <button className="Slideshow-button prev" onClick={prevSlide} disabled={isTransitioning}> {/* Classe CSS mise à jour */}
                        <span aria-hidden="true">‹</span>
                        <span className="sr-only">Slide précédent</span>
                    </button>
                    <button className="Slideshow-button next" onClick={nextSlide} disabled={isTransitioning}> {/* Classe CSS mise à jour */}
                        <span aria-hidden="true">›</span>
                        <span className="sr-only">Slide suivant</span>
                    </button>

                    <div className="Slideshow-pagination"> {/* Classe CSS mise à jour */}
                        {currentIndex + 1} / {slidesCount}
                    </div>
                </>
            )}
        </div>
    );
};

export default Slideshow; // **Nom exporté changé en Slideshow**