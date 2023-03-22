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
import SaturneDesktop from '../../assets/planets pictures/Saturne 2.jpg';
import SaturneMobile from '../../assets/planets pictures/Saturne.jpg';
import Uranus from '../../assets/planets pictures/Uranus.jpg';
import Neptune from '../../assets/planets pictures/Neptune.jpg';
import Pluton from '../../assets/planets pictures/Pluton.jpg';

function Carousel({ setId }) {
    let [isDesktop, setIsDesktop] = useState();
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
    const currentImg = document.getElementById('current-img');

    const goToNextSlide = () => {
        const index =
            currentIndex === imagePlanetArray.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
        setId(imagePlanetArray[index].id);
        currentImg.classList.remove('carousel-img-animate');
        setTimeout(() => currentImg.classList.add('carousel-img-animate'), 0);
    };

    const goToPrevSlide = () => {
        const index =
            currentIndex === 0 ? imagePlanetArray.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
        setId(imagePlanetArray[index].id);
        currentImg.classList.remove('carousel-img-animate');
        setTimeout(() => currentImg.classList.add('carousel-img-animate'), 0);
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
                <img
                    src={imagePlanetArray[currentIndex].imgSrc}
                    alt={`Slide ${currentIndex}`}
                    className="carousel-img carousel-img-animate"
                    id="current-img"
                />
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
