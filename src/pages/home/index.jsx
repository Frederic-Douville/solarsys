import { Carousel, Description, PhysicalVariable } from '../../components';

function Home() {
    const physVarArray = [
        {
            icon: 'weight',
            title: 'Masse',
            data: '5,98',
            exp: '24',
            isExp: true,
            unit: 'kg',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'cube',
            title: 'Volume',
            data: '1,08',
            exp: '12',
            isExp: true,
            unit: 'm',
            unitExp: '3',
            isUnitExp: true,
        },
        {
            icon: 'ruler',
            title: 'Rayon moyen',
            data: '2500',
            exp: '',
            isExp: false,
            unit: 'km',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'gem',
            title: 'Densité',
            data: '5.51',
            exp: '',
            isExp: false,
            unit: 'g.cm',
            unitExp: '3',
            isUnitExp: true,
        },
        {
            icon: 'gravity',
            title: 'Gravité',
            data: '9.8',
            exp: '',
            isExp: false,
            unit: 'm.s',
            unitExp: '-2',
            isUnitExp: true,
        },
        {
            icon: 'rocket',
            title: "Vitesse d'échappement",
            data: '11190',
            exp: '',
            isExp: false,
            unit: 'm.s',
            unitExp: '-1',
            isUnitExp: true,
        },
        {
            icon: 'temperature',
            title: 'Température moyenne',
            data: '20',
            exp: '',
            isExp: false,
            unit: 'K',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'stopwatch',
            title: 'Période de rotation',
            data: '24',
            exp: '',
            isExp: false,
            unit: 'heures',
            unitExp: '',
            isUnitExp: false,
        },
        {
            icon: 'hourglass',
            title: 'Période de révolution',
            data: '365',
            exp: '',
            isExp: false,
            unit: 'Jours terrestres',
            unitExp: '',
            isUnitExp: false,
        },
    ];

    return (
        <div className="home">
            <Carousel />
            <Description />
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
                </div>
                <div className="physical-data-incline"></div>
            </div>
            <div className="physical-data-orbital"></div>
        </div>
    );
}

export default Home;
