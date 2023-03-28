import { useEffect } from 'react';
import { ReactComponent as InclineSphere } from '../../assets/analytics/Incline sphere.svg';

function InclineDiagram({ angle }) {
    useEffect(() => {
        const globe = document.getElementById('sphere');
        globe.style.rotate = angle;
    }, [angle]);

    return (
        <div className="incline-ctn">
            <div className="incline-line incline-horizontal"></div>
            <div className="incline-line incline-vertical"></div>
            <InclineSphere className="incline-sphere" id="sphere" />
        </div>
    );
}

export default InclineDiagram;
