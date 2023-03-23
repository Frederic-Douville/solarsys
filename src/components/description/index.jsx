import { ReactComponent as ArrowUpFromSquare } from '../../assets/icones/arrow-up-right-from-square-solid.svg';

function Description({ id, name }) {
    const descArray = {
        soleil: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Soleil',
        },
        mercure: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)',
        },
        venus: {
            wikiLink: 'https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)',
        },
        terre: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Terre',
        },
        lune: { wikiLink: 'https://fr.wikipedia.org/wiki/Lune' },
        mars: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)',
        },
        jupiter: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)',
        },
        saturne: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)',
        },
        uranus: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)',
        },
        neptune: {
            wikiLink: 'https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)',
        },
        pluton: {
            wikiLink:
                'https://fr.wikipedia.org/wiki/Pluton_(plan%C3%A8te_naine)',
        },
    };

    return (
        <div className="description">
            <h1 className="description-title">{name?.toUpperCase()}</h1>
            <div className="description-ctn">
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
