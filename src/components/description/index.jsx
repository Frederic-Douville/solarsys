import { ReactComponent as ArrowUpFromSquare } from '../../assets/icones/arrow-up-right-from-square-solid.svg';

function Description({ id, name }) {
    const descArray = {
        soleil: {
            content_1:
                "Le Soleil est l'étoile centrale de notre système solaire. Il est principalement composé d'hydrogène et d'hélium. La température à sa surface est d'environ 5 500 degrés Celsius, tandis qu’elle atteint des millions de degrés en son centre. Sa masse représente environ 99,86% de la masse totale du système solaire. Le Soleil est la principale source d'énergie pour la vie sur Terre. Dans son noyau, la fusion nucléaire des atomes d’hydrogène produit une quantité colossale de lumière et de chaleur.",
            content_2:
                'Il existe huit planètes gravitant autour du Soleil : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Elles tournent autour du Soleil selon des orbites elliptiques, et ont des vitesses de déplacement différentes. Les quatre premières sont des planètes telluriques : elles sont petites, rocheuses et possèdent une atmosphère mince. Les quatre autres sont des planètes géantes et gazeuses. Notre système solaire posséde d’autres objets célestes comme des planètes naines, une ceinture d’astéroïdes et plusieurs comètes.',
            wikiLink: 'https://fr.wikipedia.org/wiki/Soleil',
        },
        mercure: {
            content_1:
                "Mercure est la planète la plus proche du Soleil mais aussi la plus petite du système solaire. C’est une planète rocheuse et elle possède une atmosphère très mince. Son noyau, qui représente 85 % de son rayon, est composé essentiellement de métaux comme le fer, et son manteau contient principalement du silicate. La surface de Mercure est recouverte de cratères d'impact, de plaines lisses et de falaises escarpées. ",
            content_2:
                'Observée dès l’antiquité, la planète doit son nom au messager des dieux romains "Mercure" en raison de la vitesse avec laquelle elle se déplace dans le ciel.  Sa proximité avec notre étoile implique qu\'elle ne peut être vue que près de l\'horizon avant le lever de soleil ou après le coucher du soleil. Deux sondes spatiales, Mariner 10 puis MESSENGER, ont été envoyées vers Mercure pour réaliser des études détaillées de sa topographie, de son histoire géologique, de son champ magnétique et de son exosphère. ',
            wikiLink: 'https://fr.wikipedia.org/wiki/Mercure_(plan%C3%A8te)',
        },
        venus: {
            content_1:
                'Vénus est la deuxième planète la plus proche du Soleil et est de taille similaire à la Terre. C’est une planète rocheuse possédant une atmosphère dense et brûlante, principalement composée de dioxyde de carbone. Elle est enveloppée par une couche opaque de nuages d’acide sulfurique. La pression atmosphérique de Vénus est 92 fois supérieur à celle de la Terre et elle est de loin la planète la plus chaude du système solaire. Sa surface présente un paysage désertique, sec et rocheux où se manifeste une activité volcanique.',
            content_2:
                'Souvent appelée "l\'étoile du matin", Vénus est l’un des astres les plus brillants du ciel nocturne et a fait l\'objet des premières observations astronomiques dès le deuxième millénaire avant notre ère. C’est aussi la première planète visitée par un véhicule spatial, Mariner 2, et la première où une sonde spatiale, Venera 7, se soit posée avec succés. C’est l’orbiteur Magellan qui cartographia la surface de la planète.',
            wikiLink: 'https://fr.wikipedia.org/wiki/V%C3%A9nus_(plan%C3%A8te)',
        },
        terre: {
            content_1:
                "La Terre est la troisième planète par ordre d’éloignement au Soleil, et la plus grande des quatre planètes telluriques. C'est un astre rocheux de taille moyenne avec une atmosphère riche en oxygène, et sa surface est couverte à 71 % d'océans. Les 29 % restant sont des terres immergées composées de plaines, de montagnes, de déserts, de forêts et de glaciers. Elle possède un unique satellite naturel, la Lune.",
            content_2:
                'Son enveloppe rigide, la lithosphère, est divisée en plusieurs segments appelés plaques tectoniques. Celles-ci se déplacent lentement au fil du temps et changent la topologie de la surface de la planète depuis des millions d’années. La Terre est le seul objet céleste connu du système solaire à abriter une grande variété de formes de vie tels que des micro-organismes, des plantes et des animaux. Elle est notamment le berceau de l’humanité.',
            wikiLink: 'https://fr.wikipedia.org/wiki/Terre',
        },
        lune: {
            content_1:
                'La Lune est le seul satellite naturel de la Terre. Elle est dépourvue d’atmosphère et de champ magnétique. Sa surface composée de roches et de métaux est constamment exposées aux rayonnements solaires et cosmiques. Elle est caractérisée par des plaines basaltiques appelées "mers lunaires" et de nombreux cratères d’impact. La Lune est en rotation synchrone avec la Terre, lui montrant donc constamment la même face.',
            content_2:
                'Son influence gravitationnelle sur notre planète produit les marées océaniques et stabilise l’inclinaison de l’axe terrestre. La taille apparente de la Lune dans le ciel est approximativement la même que celle du Soleil. Par conséquent, en de rares occasions, elle peut couvrir presque intégralement notre étoile dans le ciel, formant ainsi une éclipse solaire totale. La Lune a été survolée pour la première fois par la sonde spatiale russe Luna 2. Les missions américaines Apollo 11 à 17, ont ensuite permis à plusieurs astronautes d’explorer sa surface et de ramener des échantillons de roches lunaires. ',
            wikiLink: 'https://fr.wikipedia.org/wiki/Lune',
        },
        mars: {
            content_1:
                'Mars est la quatrième planète la plus proche du Soleil et elle est la deuxième plus petite de notre système solaire. Elle possède une atmosphère mince dont la densité est équivalente à 1% de celle de la Terre. La couleurs rouge caractéristique de Mars est due à l’abondance d’oxyde de fer sur sa surface. Sa géographie présente des cratères d’impacts mais aussi des formations d’origine tectoniques et climatiques. Elle a cependant perdu la quasi totalité de son activité géologique. Mars possède deux satellites naturels, Phobos et Déimos.',
            content_2:
                'Mars détient le record du plus haut volcan, l’Olympus Mons, et du plus grand canyon, Valles Marineris, du système solaire. Observable à l’œil nu dès l’antiquité, elle prit le nom du dieu de la guerre de la mythologie romaine à cause de sa couleur rouge. La sonde spatiale Phoenix envoyée sur la planète a révélé la présence de glace d’eau dans le sol martien. Il est probable que dans le passé, Mars était parcourue par de grandes quantités d’eau liquide sur sa surface.',
            wikiLink: 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)',
        },
        jupiter: {
            content_1:
                'Jupiter est la plus grande planète du système solaire et la cinquième par ordre d’éloignement au Soleil. Géante gazeuse composée principalement d’hydrogène et d’hélium, Jupiter n’a pas de surface solide mais possède probablement un noyau rocheux enveloppé d’un manteau d’hydrogène métallique. Des tempêtes, dont les vents violents peuvent atteindre 600 km/h, se manifestent dans son atmosphère extérieur. La grande tâche rouge observée sur sa surface turbulente est un anticyclone géant de taille comparable à la Terre.',
            content_2:
                'Jupiter possède 95 lunes dont les plus connues sont les quatres satellites découvert par Galilée au moyen de sa lunette astronomique: Io, Europe, Callisto et Ganymède la plus grande lune du système solaire. Depuis l’Antiquité, Jupiter peut être vue à l’œil nu la nuit. Elle prit le nom du maître des dieux romains en raison de sa grande luminosité. Jupiter fut survolée puis explorée par les sondes des programmes Pioneer et Voyager dans les années 70. Plus récemment, deux sondes placées en orbite, Galiléo et Juno, ont étudié la planète et ses lunes.',
            wikiLink: 'https://fr.wikipedia.org/wiki/Jupiter_(plan%C3%A8te)',
        },
        saturne: {
            content_1:
                'Saturne est la sixième planète par ordre d’éloignement au Soleil, et la deuxième plus grande par la taille et la masse dans le système solaire. C’est une géante gazeuse composée d’hydrogène et d’hélium et dont le noyau probablement rocheux est constitué de silicates et de fer. Son atmosphère est très dynamique, les vents sur Saturne peuvent atteindre 1800km/h. La caractéristique la plus célèbre de la planète est son système d’anneaux constitués d’innombrables particules de glaces et de poussières.',
            content_2:
                'Saturne possède 82 lunes, dont la plus grande, Titan, est le seul satellite naturel connu à posséder une atmosphère dense composée à 98,4% de diazote. Une autre de ses lunes, Encelade, où sont émis de puissant geyser de glace, serait un habitat potentiel pour la vie microbienne. Observable à l’œil nu dans le ciel nocturne depuis l’Antiquité, elle porte le nom du dieu romain de l’agriculture. Elle a été explorée par quatre sondes spatiales : Pioneer 11, Voyager 1 et 2 puis Cassini-Huygens.',
            wikiLink: 'https://fr.wikipedia.org/wiki/Saturne_(plan%C3%A8te)',
        },
        uranus: {
            content_1:
                'Uranus est la septième planète par ordre d’éloignement au Soleil et la troisième plus grande planète du système solaire. Elle possède une atmosphère composée principalement d’hydrogène, d’hélium et de traces d’hydrocarbures. Le méthane présent est responsable de la couleur aigue-marine caractéristique de cette planète gazeuse. Son noyau rocheux est enveloppé d’un épais manteau de glaces d’ammoniac, d’eau et de méthane. Cas unique parmi les autres planètes, l’axe de rotation de cette "géante de glace" est tellement incliné que ses pôles sont localisés dans le plan de son orbite autour du Soleil. ',
            content_2:
                'Uranus possède un système de 13 anneaux et 27 lunes orbitent autour d’elle. Observée avec un télescope par l’astronome britannique William Herschel en 1781, elle est la première planète découverte à l’époque moderne. Son nom vient d’Ouranos, divinité grecque du ciel. Seule la sonde Voyager 2 passa à proximité de la planète pour réaliser quelques images. Des observations plus détaillées ont depuis été faites grâce notamment au télescope spatial Hubble.',
            wikiLink: 'https://fr.wikipedia.org/wiki/Uranus_(plan%C3%A8te)',
        },
        neptune: {
            content_1:
                'Neptune est la planète la plus éloignée du Soleil, et la planète gazeuse la plus dense du système solaire. Comme Uranus, elle est qualifiée de "géante de glace". Elle a la même structure interne, un noyau rocheux enveloppé d’une large enveloppe de glaces d’eau, d’ammoniac et de méthane. Son atmosphère est composée d’hydrogène, d’hélium, de traces d’hydrocarbures et peut-être d’azote. la présence de méthane est probablement responsable de la couleur bleu azur de Neptune. Dans son atmosphère, les vents peuvent atteindre des vitesses de 2100 km/h.',
            content_2:
                'Neptune possède un système d’anneaux et 14 satellites naturels. Au 19e siècle, l’hypothèse d’une huitième planète émergea grâce à l’observation d’anomalies gravitationnelles sur l’orbite d’Uranus. À l’aide de ces observations, l’astronome français Urbain Le Verrier calcula la position de cette planète, ce qui permit au prussien Johann Gottfried Galle de découvrir Neptune en 1846. La planète porte le nom du dieu des mers de la mythologie romaine. Neptune a été survolée par la sonde Voyager 2 puis observée par Hubble et plusieurs grands télescopes terrestres. ',
            wikiLink: 'https://fr.wikipedia.org/wiki/Neptune_(plan%C3%A8te)',
        },
        pluton: {
            content_1:
                'Pluton est une planète naine orbitant autour du soleil et située dans la ceinture de Kuiper, zone du système solaire s’étendant au-delà de l’orbite de Neptune. Elle est composée de roche et de glaces de méthane, d’eau et d’azote. Découverte par l’astronome américain Clyde Tombaugh en 1930, Pluton a longtemps été considéré comme la neuvième planète du système solaire. Cependant, la découverte d’autres objets similaires, comme Éris et Cérès, amena l’Union astronomique internationale à redéfinir la notion de planète. Depuis 2006, Pluton est classée comme planète naine.',
            content_2:
                'Pluton possède cinq lunes dont la plus importante, Charon, est si grande que le couple qu’elle forme avec la planète naine est souvent considéré comme un système double. La sonde spatiale New Horizons, lancée en 2006 par la NASA, est la première à explorer Pluton et ses satellites.',
            wikiLink:
                'https://fr.wikipedia.org/wiki/Pluton_(plan%C3%A8te_naine)',
        },
    };

    return (
        <div className="description">
            <h1 className="description-title">{name?.toUpperCase()}</h1>
            <div className="description-ctn">
                <p className="description-content">{descArray[id].content_1}</p>
                <p className="description-content">{descArray[id].content_2}</p>
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
