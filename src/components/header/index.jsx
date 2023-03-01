import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as SolarSysLogo } from '../../assets/Solar system logo.svg';

function Header() {
    return (
        <div className="header">
            <div className="header-ctn">
                <a
                    href="https://Frederic-Douville.github.io/solarsys"
                    className="header-logo-link"
                >
                    <SolarSysLogo className="header-logo-icon" /> <br />
                    <span className="header-logo-title">SolarSys</span>
                </a>

                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li>
                            <Link to={'/'} className="header-nav-link">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to={'/notions'} className="header-nav-link">
                                Notions
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-shadow"></div>
        </div>
    );
}

export default Header;
