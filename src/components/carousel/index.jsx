import { useState } from 'react';
import { ReactComponent as AngleLeft } from '../../assets/icones/angle-left-solid.svg';
import { ReactComponent as AngleRight } from '../../assets/icones/angle-right-solid.svg';
import Soleil from '../../assets/planets pictures/Soleil.webp';
import Mercure from '../../assets/planets pictures/Mercure.webp';
import Venus from '../../assets/planets pictures/Venus.webp';
import Terre from '../../assets/planets pictures/Terre.webp';
import Lune from '../../assets/planets pictures/Lune.webp';
import Mars from '../../assets/planets pictures/Mars.webp';
import Jupiter from '../../assets/planets pictures/Jupiter.webp';
import SaturneDesktop from '../../assets/planets pictures/Saturne 2.webp';
import SaturneMobile from '../../assets/planets pictures/Saturne.webp';
import Uranus from '../../assets/planets pictures/Uranus.webp';
import Neptune from '../../assets/planets pictures/Neptune.webp';
import Pluton from '../../assets/planets pictures/Pluton.webp';

function Carousel({ setId }) {
    let [isDesktop, setIsDesktop] = useState(true);
    window.addEventListener('resize', checkWindowSize);
    function checkWindowSize() {
        const width = window.innerWidth;
        if (width >= 1200) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }

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
            imgSrc: isDesktop ? SaturneDesktop : SaturneMobile,
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
                <div
                    className="carousel-angle-ctn carousel-angle-left"
                    onClick={goToPrevSlide}
                >
                    <AngleLeft className="carousel-angle-icon" />
                </div>
                {imagePlanetArray.map((image, index) => (
                    <img
                        src={image.imgSrc}
                        alt={`Slide ${index}`}
                        key={`img-${index}`}
                        className={`carousel-img ${
                            index === currentIndex ? 'carousel-img-active' : ''
                        }`}
                    />
                ))}
                <div
                    className="carousel-angle-ctn carousel-angle-right"
                    onClick={goToNextSlide}
                >
                    <AngleRight className="carousel-angle-icon" />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
