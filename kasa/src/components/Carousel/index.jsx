import React, { useState } from 'react';
import '../../styles/carousel.scss';

const Carousel = ({ pictures }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = pictures.length;

const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
};

const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
};

return (
    <div className="carousel">
        {totalImages > 1 && (
        <>
            <button onClick={prevImage} className="carousel-button prev-button">{"<"}</button>
            <button onClick={nextImage} className="carousel-button next-button">{">"}</button>
            <div className="image-counter">{currentImageIndex + 1}/{totalImages}</div>
        </>
    )}
    <img src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex}`} className="carousel-image"/>
    </div>
);
};

export default Carousel;
