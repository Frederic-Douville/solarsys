import { ReactComponent as ArrowUpFromSquare } from '../../assets/icones/arrow-up-right-from-square-solid.svg';
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

function Description({ id, name }) {
    const descArray = {
        soleil: {
            imgSrc: Soleil,
            wikiLink: 'https://fr.wikipedia.org/wiki/Soleil',
        },
        mercure: {
            imgSrc: Mercure,
            wikiLink: 'https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)',
        },
        venus: {
            imgSrc: Venus,
            wikiLink: 'https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)',
        },
        terre: {
            imgSrc: Terre,
            wikiLink: 'https://fr.wikipedia.org/wiki/Terre',
        },
        lune: { imgSrc: Lune, wikiLink: 'https://fr.wikipedia.org/wiki/Lune' },
        mars: {
            imgSrc: Mars,
            wikiLink: 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)',
        },
        jupiter: {
            imgSrc: Jupiter,
            wikiLink: 'https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)',
        },
        saturne: {
            imgSrc: Saturne,
            wikiLink: 'https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)',
        },
        uranus: {
            imgSrc: Uranus,
            wikiLink: 'https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)',
        },
        neptune: {
            imgSrc: Neptune,
            wikiLink: 'https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)',
        },
        pluton: {
            imgSrc: Pluton,
            wikiLink:
                'https://fr.wikipedia.org/wiki/Pluton_(plan%C3%A8te_naine)',
        },
    };

    return (
        <div className="description">
            <div className="description-img-ctn">
                <img
                    src={descArray[id].imgSrc}
                    alt={`photographie de ${id}`}
                    className="description-img"
                />
            </div>
            <div className="description-ctn">
                <h1 className="description-title">{name?.toUpperCase()}</h1>
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
                    href={descArray[id].wikiLink}
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
