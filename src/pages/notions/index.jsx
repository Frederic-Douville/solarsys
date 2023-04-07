import { NotionDef, ScrollTopButton } from '../../components';

function Notions() {
    const notionsArray = [
        {
            title: 'La masse',
            definition:
                "d'une planète rend compte de la quantité de matière qu'elle contient dans son corps. Pour la calculer, les astronomes utilisent les principes de la gravitation universelle énoncés par Isaac Newton. En effet, deux corps célestes exercent mutuellement l’un sur l’autre une même force d’attraction dont l’intensité dépend de leur masse et de la distance qui les sépare. Ces principes sont appliquées aux lois de Kepler qui décrivent le mouvement elliptique des astres autour du Soleil. À l’aide d’observations astronomiques, on peut déduire la distance d’une planète par rapport au Soleil puis estimer sa masse.",
            links: [
                {
                    name: 'Lois de Kepler',
                    url: 'https://fr.wikipedia.org/wiki/Lois_de_Kepler',
                },
                {
                    name: 'Lois de Newton',
                    url: 'https://fr.wikipedia.org/wiki/Lois_du_mouvement_de_Newton',
                },
                {
                    name: 'Loi universelle de la gravitation',
                    url: 'https://fr.wikipedia.org/wiki/Loi_universelle_de_la_gravitation',
                },
            ],
        },
        {
            title: 'Le volume',
            definition:
                'd’une planète mesure son extension tridimensionnelle dans l’espace physique. Il est calculé en intégrant la mesure du diamètre apparent de l’astre dans la formule du volume d’une sphère. Ce diamètre est déduit d’une relation entre la taille angulaire de l’objet et sa distance par rapport à l’observateur.',
            links: [
                {
                    name: 'Taille apparente',
                    url: 'https://fr.wikipedia.org/wiki/Taille_apparente',
                },
            ],
        },
        {
            title: 'La masse volumique',
            definition:
                'd’une substance est une grandeur physique qui caractérise la masse de cette substance par unité de volume. Dans le cas d’une planète, qui contient une multitude de substances différentes, la masse volumique qui la caractérise sera une moyenne calculée par le rapport entre sa masse et son volume totale.',
            links: [
                {
                    name: 'Masse volumique',
                    url: 'https://fr.wikipedia.org/wiki/Masse_volumique',
                },
            ],
        },
        {
            title: 'le rayon moyen',
            definition:
                'd’une planète est la distance entre son centre et sa surface. En réalité, une planète en rotation a une tendance naturelle à s’aplatir sous l’effet de la force centrifuge exercée sur son corps sphérique.  Son rayon équatorial est donc plus grand que son rayon polaire. En faisant la moyenne des deux on obtient le rayon moyen.',
            links: [
                {
                    name: 'Aplatissement',
                    url: 'https://fr.wikipedia.org/wiki/Aplatissement',
                },
                {
                    name: 'Force centrifuge',
                    url: 'https://fr.wikipedia.org/wiki/Force_centrifuge',
                },
            ],
        },
        {
            title: 'La gravité de surface',
            definition:
                'ou champ de pesanteur est une force qui s’exerce sur tous corps se trouvant à proximité de la surface d’un astre et dirigé vers son centre. Plus un objet céleste est massif, plus l’intensité de cette force, assimilée à une accélération, sera importante. Le champ de pesanteur est une approximation localisée à la surface du champ de gravitation d’une planète. Celui-ci s’étend autour de l’astre et son intensité dépend de la distance qui le sépare d’un objet.',
            links: [
                {
                    name: 'Gravité de surface',
                    url: 'https://fr.wikipedia.org/wiki/Gravit%C3%A9_de_surface',
                },
                {
                    name: 'Gravitation',
                    url: 'https://fr.wikipedia.org/wiki/Gravitation',
                },
            ],
        },
        {
            title: "La vitesse d'échappement",
            definition:
                'ou vitesse de libération est la vitesse minimale que doit atteindre un objet pour s’extraire de l’attraction gravitationnelle d’un astre et s’en éloigner définitivement. Dans ce cas de figure, l’atmosphère de la planète n’est pas prise en compte. Plus la masse de l’astre est importante, plus cette vitesse doit être grande.',
            links: [
                {
                    name: 'Vitesse de libération',
                    url: 'https://fr.wikipedia.org/wiki/Vitesse_de_lib%C3%A9ration',
                },
            ],
        },
        {
            title: 'La température moyenne',
            definition:
                "d'une planète dépend de plusieurs facteurs tels que sa distance par rapport au Soleil, sa composition atmosphérique et sa capacité à retenir la chaleur. Une méthode consiste à utiliser des instruments qui détectent le rayonnement infrarouge émis par la planète ou à analyser son spectre lumineux afin d’en déduire la température. Un autre moyen est d’envoyer une sonde à la surface de la planète afin de la mesurer directement. Cette température peut aussi être calculée si on connaît l’éloignement de la planète par rapport au Soleil et sa capacité à réfléchir la lumière. Cependant, ce calcul ne prend pas en compte les effets atmosphériques sur la température de surface.",
            links: [
                {
                    name: 'Température de surface des planètes',
                    url: 'https://fr.wikibooks.org/wiki/Plan%C3%A9tologie/La_temp%C3%A9rature_de_surface_des_plan%C3%A8tes',
                },
                {
                    name: 'Infrarouge',
                    url: 'https://fr.wikipedia.org/wiki/Infrarouge',
                },
                {
                    name: 'Spectroscopie',
                    url: 'https://fr.wikipedia.org/wiki/Spectroscopie',
                },
            ],
        },
        {
            title: 'La période de rotation',
            definition:
                'd’une planète, ou période sidérale, est la durée que met celle-ci pour faire un tour complet sur elle-même. La période synodique est le temps au bout duquel la planète retrouve la même orientation par rapport au Soleil. Elle est l’origine des cycles de jour et de nuit sur une planète. Les valeurs de ces deux périodes ne sont pas forcément similaire. Cela dépend de la vitesse de rotation de la planète et de la vitesse de déplacement orbitale.',
            links: [
                {
                    name: 'Période de rotation',
                    url: 'https://fr.wikipedia.org/wiki/P%C3%A9riode_de_rotation',
                },
            ],
        },
        {
            title: 'La période de révolution',
            definition:
                'd’une planète, ou période orbitale, est la durée mise par un astre pour faire un tour complet autour d’un autre astre. Pour la Terre, cela représente une année complète en terme de durée.',
            links: [
                {
                    name: 'Période de révolution',
                    url: 'https://fr.wikipedia.org/wiki/P%C3%A9riode_de_r%C3%A9volution',
                },
            ],
        },
        {
            title: "L'inclinaison de l'axe",
            definition:
                'd’une planète, ou obliquité, est la valeur de l’angle entre son axe de rotation et une perpendiculaire au plan orbital. Pour la planète Terre, cette inclinaison naturelle est à l’origine de l’existence des saisons et de leur succession pendant une période de révolution complète.',
            links: [
                {
                    name: "Inclinaison de l'axe",
                    url: 'https://fr.wikipedia.org/wiki/Inclinaison_de_l%27axe',
                },
            ],
        },
        {
            title: 'Le demi grand axe',
            definition:
                'est la moitié du plus grand diamètre d’une ellipse. En astronomie, il permet de définir l’envergure de l’orbite d’un astre et sa valeur permet de calculer la période orbitale d’un corps céleste se déplaçant autour d’un autre.',
            links: [
                {
                    name: 'Demi grand axe',
                    url: 'https://www.le-systeme-solaire.net/demi-grand-axe.html',
                },
            ],
        },
        {
            title: 'Le périhélie',
            definition:
                'est la distance minimal entre le Soleil et un astre en orbite autour de lui. Pour une lune orbitant autour d’une planète, on appelle cette distance le périgée. En raison de la distribution de masse dans le système solaire et des perturbations gravitationnelles qui s’y manifestent, le Soleil n’est pas toujours au centre des trajectoires orbitales des planètes.',
            links: [
                {
                    name: 'Périhélie',
                    url: 'https://fr.wikipedia.org/wiki/P%C3%A9rih%C3%A9lie',
                },
            ],
        },
        {
            title: "L'aphélie",
            definition:
                'est la distance maximal entre le Soleil et un astre en orbite autour de lui. Pour une lune orbitant autour d’une planète, on appelle cette distance l’apogée.',
            links: [
                {
                    name: 'Aphélie',
                    url: 'https://fr.wikipedia.org/wiki/Aph%C3%A9lie',
                },
            ],
        },
        {
            title: 'La notation scientifique',
            definition:
                "est une notation qui permet d'exprimer et de comparer facilement de très grands ou de très petits nombres. En astronomie,  Il s'agit de décomposer certaines valeurs trop grandes en une multiplication de deux éléments: un nombre décimal compris entre 0 et 10 avec une puissance de 10. L'exposant de cette puissance correspond à l'ordre de grandeur du nombre simplifié.",
            exemple: (
                <div className="notionDef-exemple">
                    <span className="notionDef-exemple-title">Exemples :</span>
                    <ul className="notionDef-exemple-list">
                        <li>
                            3 500 ={' '}
                            <var>
                                3.5x10<sup>3</sup>
                            </var>
                        </li>
                        <li>
                            6 580 000 ={' '}
                            <var>
                                6.58x10<sup>6</sup>
                            </var>
                        </li>
                        <li>
                            3 759 000 000 ={' '}
                            <var>
                                3.759x10<sup>9</sup>
                            </var>
                        </li>
                    </ul>
                </div>
            ),
            links: [
                {
                    name: 'Notation scientifique',
                    url: 'https://fr.wikipedia.org/wiki/Notation_scientifique',
                },
            ],
        },
    ];
    return (
        <div className="notions-ctn">
            {notionsArray.map((notion, index) => (
                <NotionDef
                    title={notion.title}
                    definition={notion.definition}
                    exemple={notion.exemple}
                    links={notion.links}
                    key={`notion-${index}`}
                    classname={`notionDef-ctn notionDef-animation-${index}`}
                />
            ))}
            <div className="notions-usefullLinks">
                <span>Liens utiles</span>
                <div className="notions-usefullLinks-ctn">
                    <a
                        className="notions-usefullLinks-link"
                        href="https://fr.wikibooks.org/wiki/Plan%C3%A9tologie"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Wikibooks/Planétologie
                    </a>
                    <a
                        className="notions-usefullLinks-link"
                        href="https://www.le-systeme-solaire.net/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        le-systeme-solaire.net
                    </a>
                </div>
            </div>
            <ScrollTopButton />
        </div>
    );
}

export default Notions;
