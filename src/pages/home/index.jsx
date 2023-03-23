import { useState } from 'react';
import {
    Carousel,
    Description,
    InclineDiagram,
    OrbitalDiagram,
    PhysicalVariable,
    ScrollTopButton,
} from '../../components';
import { useAxiosGetDatas } from '../../hook/useAxios';
import SolarSystem from '../../assets/Solar System.webp';

function Home() {
    const [id, setId] = useState('soleil');

    const { datas } = useAxiosGetDatas(id);

    const physVarArray = [
        {
            icon: 'weight',
            title: 'Masse',
            data: datas.mass?.massValue,
            exp: datas.mass?.massExponent,
            isExp: true,
            unit: 'kg',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'cube',
            title: 'Volume',
            data: datas.vol?.volValue,
            exp: datas.vol?.volExponent,
            isExp: true,
            unit: 'm',
            unitExp: '3',
            isUnitExp: true,
        },
        {
            icon: 'ruler',
            title: 'Rayon moyen',
            data: datas?.meanRadius,
            exp: '',
            isExp: false,
            unit: 'km',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'gem',
            title: 'Masse volumique',
            data: datas?.density * 1000,
            exp: '',
            isExp: false,
            unit: 'kg.m',
            unitExp: '3',
            isUnitExp: true,
        },
        {
            icon: 'gravity',
            title: 'Gravité',
            data: datas?.gravity,
            exp: '',
            isExp: false,
            unit: 'm.s',
            unitExp: '-2',
            isUnitExp: true,
        },
        {
            icon: 'rocket',
            title: "Vitesse d'échappement",
            data: datas?.escape,
            exp: '',
            isExp: false,
            unit: 'm.s',
            unitExp: '-1',
            isUnitExp: true,
        },
        {
            icon: 'temperature',
            title: 'Température moyenne',
            data: datas?.avgTemp - 273.15,
            exp: '',
            isExp: false,
            unit: '°C',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'stopwatch',
            title: 'Période de rotation',
            data: Math.abs(datas?.sideralRotation),
            exp: '',
            isExp: false,
            unit: 'heures',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'hourglass',
            title: 'Période de révolution',
            data: datas?.sideralOrbit,
            exp: '',
            isExp: false,
            unit: 'Jours terrestres',
            unitExp: '',
            isUnitExp: false,
        },
    ];

    const physVarArray1 = [];
    const physVarArray2 = [];
    for (let i in physVarArray) {
        if (i <= 3) {
            physVarArray1.push(physVarArray[i]);
        } else if (i >= 4 && i <= 7) {
            physVarArray2.push(physVarArray[i]);
        }
    }

    return (
        <div className="home">
            <Carousel setId={setId} />
            <Description id={id} name={datas?.name} />
            {id === 'soleil' ? (
                <div className="physical-data-ctn">
                    <div className="physical-data-general-sun">
                        <div className="physical-data-general-box">
                            {physVarArray1.map(
                                ({
                                    icon,
                                    title,
                                    data,
                                    exp,
                                    isExp,
                                    unit,
                                    unitExp,
                                    isUnitExp,
                                }) => (
                                    <PhysicalVariable
                                        icon={icon}
                                        title={title}
                                        data={data}
                                        exp={exp}
                                        isExp={isExp}
                                        unit={unit}
                                        unitExp={unitExp}
                                        isUnitExp={isUnitExp}
                                        key={`key-${title}`}
                                    />
                                )
                            )}
                        </div>
                        <div className="physical-data-general-box">
                            {physVarArray2.map(
                                ({
                                    icon,
                                    title,
                                    data,
                                    exp,
                                    isExp,
                                    unit,
                                    unitExp,
                                    isUnitExp,
                                }) => (
                                    <PhysicalVariable
                                        icon={icon}
                                        title={title}
                                        data={data}
                                        exp={exp}
                                        isExp={isExp}
                                        unit={unit}
                                        unitExp={unitExp}
                                        isUnitExp={isUnitExp}
                                        key={`key-${title}`}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="physical-data-ctn">
                    <div className="physical-data-general">
                        {physVarArray.map(
                            ({
                                icon,
                                title,
                                data,
                                exp,
                                isExp,
                                unit,
                                unitExp,
                                isUnitExp,
                            }) => (
                                <PhysicalVariable
                                    icon={icon}
                                    title={title}
                                    data={data}
                                    exp={exp}
                                    isExp={isExp}
                                    unit={unit}
                                    unitExp={unitExp}
                                    isUnitExp={isUnitExp}
                                    key={`key-${title}`}
                                />
                            )
                        )}

                        <div className="physical-data-orbital-title-desktop">
                            <PhysicalVariable
                                icon="circle"
                                title="Donnée orbitales"
                            />
                        </div>
                    </div>
                    <div className="physical-data-incline">
                        <PhysicalVariable
                            icon="globe"
                            title="Inclinaison"
                            data={datas?.inclination}
                            unit="°"
                        />

                        <div className="physical-data-incline-diagram">
                            <InclineDiagram
                                angle={-datas?.inclination + 'deg'}
                                rotationData={datas?.sideralRotation}
                                id={id}
                            />
                        </div>
                    </div>
                </div>
            )}

            {id === 'soleil' ? (
                <div className="solar-system-ctn">
                    <img
                        src={SolarSystem}
                        alt="système solaire"
                        className="solar-system-img"
                    />
                </div>
            ) : (
                <div className="physical-data-orbital">
                    <div className="physical-data-orbital-title-mobile">
                        <PhysicalVariable
                            icon="circle"
                            title="Donnée orbitales"
                        />
                    </div>
                    <div className="physical-data-orbital-diagram">
                        <OrbitalDiagram
                            id={id}
                            semimajorAxis={datas?.semimajorAxis}
                            perihelion={datas?.perihelion}
                            aphelion={datas?.aphelion}
                        />
                    </div>
                </div>
            )}
            <ScrollTopButton />
        </div>
    );
}

export default Home;
