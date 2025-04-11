import React, { useState } from 'react';
import '../styles/Slideshow.scss';
import arrowLeft from '../assets/arrow_back_left.svg';
import arrowRight from '../assets/arrow_forward_right.svg';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return <div className="slideshow-empty">Pas d'image à afficher</div>;
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slideshow">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slideshow-image"
            />

            {images.length > 1 && (
                <>
                    <button className="prev" onClick={prevSlide}>
                        <img src={arrowLeft} alt="Précédent" />
                    </button>
                    <button className="next" onClick={nextSlide}>
                        <img src={arrowRight} alt="Suivant" />
                    </button>
                    <span className="counter">
                        {currentIndex + 1}/{images.length}
                    </span>
                </>
            )}
        </div>
    );
};

export default Slideshow;
