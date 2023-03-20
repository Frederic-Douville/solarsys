import { ReactComponent as AngleLeftIcon } from '../../assets/icones/angle-left-solid.svg';
import { ReactComponent as AngleRightIcon } from '../../assets/icones/angle-right-solid.svg';
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

function OrbitalDiagram({ id, semimajorAxis, perihelion, aphelion }) {
    const planetIconArray = {
        soleil: {
            iconSrc: <Soleil className="orbital-icon orbital-sun" />,
        },
        mercure: {
            iconSrcPer: <Mercure className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Mercure className="orbital-icon orbital-aphelion" />,
        },
        venus: {
            iconSrcPer: <Venus className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Venus className="orbital-icon orbital-aphelion" />,
        },
        terre: {
            iconSrc: <Terre className="orbital-icon orbital-sun" />,
            iconSrcPer: <Terre className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Terre className="orbital-icon orbital-aphelion" />,
        },
        lune: {
            iconSrcPer: <Lune className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Lune className="orbital-icon orbital-aphelion" />,
        },
        mars: {
            iconSrcPer: <Mars className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Mars className="orbital-icon orbital-aphelion" />,
        },
        jupiter: {
            iconSrcPer: <Jupiter className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Jupiter className="orbital-icon orbital-aphelion" />,
        },
        saturne: {
            iconSrcPer: <Saturne className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Saturne className="orbital-icon orbital-aphelion" />,
        },
        uranus: {
            iconSrcPer: <Uranus className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Uranus className="orbital-icon orbital-aphelion" />,
        },
        neptune: {
            iconSrcPer: <Neptune className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Neptune className="orbital-icon orbital-aphelion" />,
        },
        pluton: {
            iconSrcPer: <Pluton className="orbital-icon orbital-perihelion" />,
            iconSrcAph: <Pluton className="orbital-icon orbital-aphelion" />,
        },
    };

    function dataIntoScientificNotation(data) {
        const dataExp = data?.toExponential().split('e+');
        const dataRound = Math.round(dataExp[0] * 100) / 100;
        return (
            <var>
                {dataRound}x10<sup>{dataExp[1]}</sup>
            </var>
        );
    }

    return (
        <div className="orbital-ellipse" id="ellipse">
            <div className="orbital-axis"></div>
            <div className="orbital-axis orbital-axis-middle"></div>
            <div className="orbital-set-ctn">
                <div className="orbital-measure orbital-measure-perihelion">
                    <span className="orbital-data orbital-data-perihelion">
                        Périhelie: {dataIntoScientificNotation(perihelion)} km
                    </span>
                    <AngleLeftIcon className="angle angle-left angle-green" />
                    <AngleRightIcon className="angle angle-right angle-right-perihelion angle-green" />
                </div>

                <div className="orbital-measure orbital-measure-aphelion">
                    <span className="orbital-data orbital-data-aphelion">
                        Aphélie: {dataIntoScientificNotation(aphelion)} km
                    </span>
                    {id === 'lune'
                        ? planetIconArray.terre.iconSrc
                        : planetIconArray.soleil.iconSrc}

                    <AngleLeftIcon className="angle angle-left angle-green" />
                    <AngleRightIcon className="angle angle-right angle-right-aphelion angle-green" />
                </div>
                <div className="orbital-measure orbital-measure-seminajor">
                    <span className="orbital-data orbital-data-seminajor">
                        Demi grand axe:{' '}
                        {dataIntoScientificNotation(semimajorAxis)} km
                    </span>
                    <AngleLeftIcon className="angle angle-left angle-yellow" />
                    <AngleRightIcon className="angle angle-right angle-right-seminajor angle-yellow" />
                </div>

                {planetIconArray[id].iconSrcPer}
                {planetIconArray[id].iconSrcAph}
            </div>
        </div>
    );
}

export default OrbitalDiagram;
