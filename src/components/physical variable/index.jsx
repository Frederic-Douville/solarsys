import { ReactComponent as CircleDotIcon } from '../../assets/icones/circle-dot-regular.svg';
import { ReactComponent as CubeIcon } from '../../assets/icones/cube-solid.svg';
import { ReactComponent as GemIcon } from '../../assets/icones/gem-solid.svg';
import { ReactComponent as GlobeIcon } from '../../assets/icones/globe-solid.svg';
import { ReactComponent as GravityIcon } from '../../assets/icones/gravity.svg';
import { ReactComponent as HourglassIcon } from '../../assets/icones/hourglass-half-solid.svg';
import { ReactComponent as RocketIcon } from '../../assets/icones/rocket-solid.svg';
import { ReactComponent as RulerIcon } from '../../assets/icones/ruler-solid.svg';
import { ReactComponent as StopwatchIcon } from '../../assets/icones/stopwatch-solid.svg';
import { ReactComponent as TemperatureIcon } from '../../assets/icones/temperature-half-solid.svg';
import { ReactComponent as WeightIcon } from '../../assets/icones/weight-hanging-solid.svg';

function PhysicalVariable({
    icon,
    title,
    data,
    exp,
    isExp,
    unit,
    unitExp,
    isUnitExp,
}) {
    const iconList = {
        circle: <CircleDotIcon className="physical-var-icon" />,
        cube: <CubeIcon className="physical-var-icon" />,
        gem: <GemIcon className="physical-var-icon" />,
        globe: <GlobeIcon className="physical-var-icon" />,
        gravity: <GravityIcon className="physical-var-icon" />,
        hourglass: <HourglassIcon className="physical-var-icon" />,
        rocket: <RocketIcon className="physical-var-icon" />,
        ruler: <RulerIcon className="physical-var-icon" />,
        stopwatch: <StopwatchIcon className="physical-var-icon" />,
        temperature: <TemperatureIcon className="physical-var-icon" />,
        weight: <WeightIcon className="physical-var-icon" />,
    };

    return (
        <div className="physical-var">
            {iconList[icon]}
            <span className="physical-var-title">{title}:</span>
            <span className="physical-var-data">
                {isExp === true ? (
                    <var>
                        {data}.10<sup>{exp}</sup>
                    </var>
                ) : (
                    data
                )}
            </span>
            <span className="physical-var-unit">
                {isUnitExp === true ? (
                    <var>
                        {unit}
                        <sup>{unitExp}</sup>
                    </var>
                ) : (
                    unit
                )}
            </span>
        </div>
    );
}

export default PhysicalVariable;
