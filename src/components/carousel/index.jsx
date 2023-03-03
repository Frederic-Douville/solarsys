import { useState } from 'react';
import { ReactComponent as AngleLeft } from '../../assets/icones/angle-left-solid.svg';
import { ReactComponent as AngleRight } from '../../assets/icones/angle-right-solid.svg';

import { ReactComponent as Jupiter } from '../../assets/planets/Jupiter.svg';
import { ReactComponent as Lune } from '../../assets/planets/Lune.svg';
import { ReactComponent as Mars } from '../../assets/planets/Mars.svg';
import { ReactComponent as Mercure } from '../../assets/planets/Mercure.svg';
import { ReactComponent as Neptune } from '../../assets/planets/Neptune.svg';
import { ReactComponent as Pluton } from '../../assets/planets/Pluton.svg';
import { ReactComponent as Saturne } from '../../assets/planets/Saturne.svg';
import { ReactComponent as Soleil } from '../../assets/planets/Soleil.svg';
import { ReactComponent as Terre } from '../../assets/planets/Terre.svg';
import { ReactComponent as Uranus } from '../../assets/planets/Uranus.svg';
import { ReactComponent as Venus } from '../../assets/planets/Venus.svg';

function Carousel() {
    let [indexArray, setIndexArray] = useState(0);
    const planetArray = [
        {
            item: (
                <Soleil
                    className={`planet-item ${
                        indexArray === 0 ? 'planet-selected' : null
                    }`}
                    id="soleil"
                />
            ),
            id: 'soleil',
        },
        {
            item: (
                <Mercure
                    className={`planet-item ${
                        indexArray === 1 ? 'planet-selected' : null
                    }`}
                    id="mercure"
                />
            ),
            id: 'mercure',
        },
        {
            item: (
                <Venus
                    className={`planet-item ${
                        indexArray === 2 ? 'planet-selected' : null
                    }`}
                    id="venus"
                />
            ),
            id: 'venus',
        },
        {
            item: (
                <Terre
                    className={`planet-item ${
                        indexArray === 3 ? 'planet-selected' : null
                    }`}
                    id="terre"
                />
            ),
            id: 'terre',
        },
        {
            item: (
                <Lune
                    className={`planet-item ${
                        indexArray === 4 ? 'planet-selected' : null
                    }`}
                    id="lune"
                />
            ),
            id: 'lune',
        },
        {
            item: (
                <Mars
                    className={`planet-item ${
                        indexArray === 5 ? 'planet-selected' : null
                    }`}
                    id="mars"
                />
            ),
            id: 'mars',
        },
        {
            item: (
                <Jupiter
                    className={`planet-item ${
                        indexArray === 6 ? 'planet-selected' : null
                    }`}
                    id="jupiter"
                />
            ),
            id: 'jupiter',
        },
        {
            item: (
                <Saturne
                    className={`planet-item ${
                        indexArray === 7 ? 'planet-selected' : null
                    }`}
                    id="saturne"
                />
            ),
            id: 'saturne',
        },
        {
            item: (
                <Uranus
                    className={`planet-item ${
                        indexArray === 8 ? 'planet-selected' : null
                    }`}
                    id="uranus"
                />
            ),
            id: 'uranus',
        },
        {
            item: (
                <Neptune
                    className={`planet-item ${
                        indexArray === 9 ? 'planet-selected' : null
                    }`}
                    id="neptune"
                />
            ),
            id: 'neptune',
        },
        {
            item: (
                <Pluton
                    className={`planet-item ${
                        indexArray === 10 ? 'planet-selected' : null
                    }`}
                    id="pluton"
                />
            ),
            id: 'pluton',
        },
    ];

    function slideToLeft() {
        if (indexArray <= 0) {
            return;
        }
        setIndexArray((indexArray -= 1));
    }

    function slideToRight() {
        if (indexArray === planetArray.length - 1) {
            return;
        }
        setIndexArray((indexArray += 1));
    }

    return (
        <div className="carousel">
            <div className="carousel-angle-ctn">
                <AngleLeft
                    className="carousel-angle-icon"
                    onClick={slideToLeft}
                />
            </div>
            <div className="planet-ctn" id="planetCtn">
                {indexArray > 0 ? (
                    planetArray[indexArray - 1]?.item
                ) : (
                    <div className="planet-empty"></div>
                )}

                {planetArray[indexArray].item}

                {indexArray < planetArray.length - 1 ? (
                    planetArray[indexArray + 1]?.item
                ) : (
                    <div className="planet-empty"></div>
                )}
            </div>
            <div className="carousel-angle-ctn">
                <AngleRight
                    className="carousel-angle-icon"
                    onClick={slideToRight}
                />
            </div>
        </div>
    );
}

export default Carousel;
