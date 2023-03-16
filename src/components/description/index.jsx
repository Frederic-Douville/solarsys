import { ReactComponent as ArrowUpFromSquare } from '../../assets/icones/arrow-up-right-from-square-solid.svg';
import Terre from '../../assets/La Terre.jpg';
function Description() {
    const imgSrcArray = {
        soleil: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Solar_prominence_from_STEREO_spacecraft_September_29%2C_2008.jpg/1280px-Solar_prominence_from_STEREO_spacecraft_September_29%2C_2008.jpg',
        mercure:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1280px-Mercury_in_color_-_Prockter07_centered.jpg',
        venus: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
        terre: Terre,
        lune: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1280px-FullMoon2010.jpg',
        mars: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mars_Valles_Marineris_EDIT.jpg/1280px-Mars_Valles_Marineris_EDIT.jpg',
        jupiter:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg/1280px-PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg',
        saturne:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/2560px-Saturn_during_Equinox.jpg',
        uranus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1280px-Uranus2.jpg',
        neptune:
            'https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg',
        pluton: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Nh-pluto-in-true-color_2x.jpg/1280px-Nh-pluto-in-true-color_2x.jpg',
    };
    const id = 'terre';

    return (
        <div className="description">
            <div className="description-img-ctn">
                <img
                    src={imgSrcArray[id]}
                    alt={`photographie de ${id}`}
                    className="description-img"
                />
            </div>
            <div className="description-ctn">
                <h1 className="description-title">
                    {'LA ' + id.toUpperCase()}
                </h1>
                <p className="description-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <a
                    className="description-wiki-link"
                    href="https://fr.wikipedia.org/wiki/Terre"
                    target="_blank"
                    rel="noreferrer"
                >
                    Wikipedia{' '}
                    <ArrowUpFromSquare className="description-wiki-icon" />
                </a>
            </div>
        </div>
    );
}

export default Description;
