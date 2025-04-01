import React from 'react';
import '../styles/Banner.scss'; // Adjust the path as necessary

const Banner = ({ image, text }) => {
    return (
        <div className="banner-wrapper">
            <div className="container">
            <div className="banner">
                <img src={image} alt="bannière Kasa" className="banner__img" />
                <div className="banner__overlay"></div>
                {text && <h1 className="banner__text">{text}</h1>}
                </div>
            </div>
        </div>

    );
};

export default Banner;
