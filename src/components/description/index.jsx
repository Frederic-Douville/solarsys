import { ReactComponent as ArrowUpFromSquare } from '../../assets/icones/arrow-up-right-from-square-solid.svg';
function Description() {
    const imgSrcArray = {
        soleil: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Solar_prominence_from_STEREO_spacecraft_September_29%2C_2008.jpg/1280px-Solar_prominence_from_STEREO_spacecraft_September_29%2C_2008.jpg',
        mercure:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1280px-Mercury_in_color_-_Prockter07_centered.jpg',
        venus: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
    };
    const id = 'soleil';

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
                    {'LE ' + id.toUpperCase()}
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
                <a className="description-wiki-link">
                    Wikipedia{' '}
                    <ArrowUpFromSquare className="description-wiki-icon" />
                </a>
            </div>
        </div>
    );
}

export default Description;
