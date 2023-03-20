import { useEffect } from 'react';
import { ReactComponent as InclineSphere1 } from '../../assets/analytics/Incline sphere 1.svg';
import { ReactComponent as InclineSphere2 } from '../../assets/analytics/Incline sphere 2.svg';

function InclineDiagram({ angle, id }) {
    useEffect(() => {
        const globe = document.getElementById('sphere');
        globe.style.rotate = angle;
    }, [angle]);

    return (
        <div className="incline-ctn">
            <div className="incline-line incline-horizontal"></div>
            <div className="incline-line incline-vertical"></div>
            {id === 'venus' || id === 'pluton' || id === 'uranus' ? (
                <InclineSphere2 className="incline-sphere" id="sphere" />
            ) : (
                <InclineSphere1 className="incline-sphere" id="sphere" />
            )}
        </div>
    );
}

export default InclineDiagram;
