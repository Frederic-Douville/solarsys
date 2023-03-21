import { useState } from 'react';
import { ReactComponent as AngleLeft } from '../../assets/icones/angle-left-solid.svg';
import { ReactComponent as AngleRight } from '../../assets/icones/angle-right-solid.svg';
import Soleil from '../../assets/planets pictures/Soleil.jpg';
import Mercure from '../../assets/planets pictures/Mercure.jpg';
import Venus from '../../assets/planets pictures/Venus.jpg';
import Terre from '../../assets/planets pictures/Terre.jpg';
import Lune from '../../assets/planets pictures/Lune.jpg';
import Mars from '../../assets/planets pictures/Mars.jpg';
import Jupiter from '../../assets/planets pictures/Jupiter.jpg';
import Saturne from '../../assets/planets pictures/Saturne.jpg';
import Uranus from '../../assets/planets pictures/Uranus.jpg';
import Neptune from '../../assets/planets pictures/Neptune.jpg';
import Pluton from '../../assets/planets pictures/Pluton.jpg';

function Carousel({ setId, title }) {
    const imagePlanetArray = [
        {
            imgSrc: Soleil,
            id: 'soleil',
        },
        {
            imgSrc: Mercure,
            id: 'mercure',
        },
        {
            imgSrc: Venus,
            id: 'venus',
        },
        {
            imgSrc: Terre,
            id: 'terre',
        },
        {
            imgSrc: Lune,
            id: 'lune',
        },
        {
            imgSrc: Mars,
            id: 'mars',
        },
        {
            imgSrc: Jupiter,
            id: 'jupiter',
        },
        {
            imgSrc: Saturne,
            id: 'saturne',
        },
        {
            imgSrc: Uranus,
            id: 'uranus',
        },
        {
            imgSrc: Neptune,
            id: 'neptune',
        },
        {
            imgSrc: Pluton,
            id: 'pluton',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const index =
            currentIndex === imagePlanetArray.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
        setId(imagePlanetArray[index].id);
    };

    const goToPrevSlide = () => {
        const index =
            currentIndex === 0 ? imagePlanetArray.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
        setId(imagePlanetArray[index].id);
    };

    return (
        <div className="carousel">
            <div className="carousel-items-ctn">
                <div className="carousel-angle-ctn carousel-angle-left">
                    <AngleLeft
                        className="carousel-angle-icon"
                        onClick={goToPrevSlide}
                    />
                </div>
                <img
                    src={imagePlanetArray[currentIndex].imgSrc}
                    alt={`Slide ${currentIndex}`}
                    className="carousel-img 
                            carousel-img-active"
                />
                {/* {imagePlanetArray.map((image, index) => (
                    <img
                        src={image.imgSrc}
                        alt={`Slide ${index}`}
                        key={index}
                        className={`carousel-img ${
                            index === currentIndex ? 'carousel-img-active' : ''
                        }`}
                    />
                ))} */}

                <div className="carousel-angle-ctn carousel-angle-right">
                    <AngleRight
                        className="carousel-angle-icon"
                        onClick={goToNextSlide}
                    />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
