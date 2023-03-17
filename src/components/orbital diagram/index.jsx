import { ReactComponent as SunIcon } from '../../assets/analytics/sun sphere.svg';
import { ReactComponent as Terre } from '../../assets/planets/Terre.svg';
import { ReactComponent as AphelionPlanetIcon } from '../../assets/analytics/aphelie sphere.svg';
import { ReactComponent as PerihelionPlanetIcon } from '../../assets/analytics/perihelie sphere.svg';
import { ReactComponent as AngleLeftIcon } from '../../assets/icones/angle-left-solid.svg';
import { ReactComponent as AngleRightIcon } from '../../assets/icones/angle-right-solid.svg';

function OrbitalDiagram({ id, semimajorAxis, perihelion, aphelion }) {
    function dataIntoScientificNotation(data) {
        const dataExp = data?.toExponential().split('e+');
        const dataRound = Math.round(dataExp[0] * 1000) / 1000;
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
                    {id === 'lune' ? (
                        <Terre className="orbital-icon orbital-sun" />
                    ) : (
                        <SunIcon className="orbital-icon orbital-sun" />
                    )}

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

                <PerihelionPlanetIcon className="orbital-icon orbital-perihelion" />
                <AphelionPlanetIcon className="orbital-icon orbital-aphelion" />
            </div>
        </div>
    );
}

export default OrbitalDiagram;
